import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTqHac__fEZkFJFv1XpbP7xh0llqWMABw",
  authDomain: "chatgpt-clone-7f20b.firebaseapp.com",
  projectId: "chatgpt-clone-7f20b",
  storageBucket: "chatgpt-clone-7f20b.appspot.com",
  messagingSenderId: "770260121276",
  appId: "1:770260121276:web:83ecd82640ab286d9742b9",
  measurementId: "G-YYE99ZFLWG",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
