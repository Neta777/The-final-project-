import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTORiMgr_cFehOztSLsfkxitVn5Urwpqc",
  authDomain: "the-first-project-7c23e.firebaseapp.com",
  projectId: "the-first-project-7c23e",
  storageBucket: "the-first-project-7c23e.appspot.com",
  messagingSenderId: "204731975520",
  appId: "1:204731975520:web:cf86164bfccf5c8fd1c005",
  measurementId: "G-E0QCSBLZDP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
