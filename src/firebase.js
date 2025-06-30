import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBUQ5PpSamlz81HjNBDtVgpGIuaIYl7xM8",
  authDomain: "mouzekart.firebaseapp.com",
  projectId: "mouzekart",
  storageBucket: "mouzekart.appspot.com",
  messagingSenderId: "240661350526",
  appId: "1:240661350526:web:71c1b564df4c05e2a2b02f",
  measurementId: "G-1VBQHFS82D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };