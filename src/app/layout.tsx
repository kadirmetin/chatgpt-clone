import { getServerSession } from "next-auth";

import SideBar from "@/components/SideBar";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SessionProvider } from "@/components/SessionProvider";

import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT Clone",
  description:
    "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="max-w-xs h-screen overflow-y-auto md:min-w-[20rem] bg-[#202123]">
                <SideBar />
              </div>

              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
