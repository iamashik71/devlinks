import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNEDGKEHmYQ1siWWLfDlbfimvBABT7wzY",
  authDomain: "devlinks-f2e37.firebaseapp.com",
  projectId: "devlinks-f2e37",
  storageBucket: "devlinks-f2e37.appspot.com",
  messagingSenderId: "849496176694",
  appId: "1:849496176694:web:e1ede9f73f58c7003ec097",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
