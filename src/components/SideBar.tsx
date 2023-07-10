"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";

import NewChat from "./NewChat";
import { db } from "../../firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div
          className="flex items-center justify-center mt-3 bg-gray-700/50 rounded-lg px-5 py-3 text-sm space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out"
          onClick={() => signOut()}
        >
          <img
            src={session.user?.image!}
            alt="Profile picture"
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2"
          />
          <p className="flex-1 ml-5">{session.user?.name}</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
