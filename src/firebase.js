// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUQ5PpSamlz81HjNBDtVgpGIuaIYl7xM8",
  authDomain: "mouzekart.firebaseapp.com",
  projectId: "mouzekart",
  storageBucket: "mouzekart.firebasestorage.app",
  messagingSenderId: "240661350526",
  appId: "1:240661350526:web:71c1b564df4c05e2a2b02f",
  measurementId: "G-1VBQHFS82D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// export default { app, db, analytics };

export default db;