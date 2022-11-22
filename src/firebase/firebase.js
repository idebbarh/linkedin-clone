import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBU5qP3x8dBUi4H8hik6PmksocG9P8tDL0",
  authDomain: "linkedin-clone-e24f8.firebaseapp.com",
  projectId: "linkedin-clone-e24f8",
  storageBucket: "linkedin-clone-e24f8.appspot.com",
  messagingSenderId: "710164968115",
  appId: "1:710164968115:web:ba9ba35da79cf41e5136c6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);