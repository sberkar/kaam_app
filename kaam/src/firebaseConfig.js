// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8WOVRex8r8k_ShJSrKm9__JNrMMOxCoY",
  authDomain: "kaamapp-ba949.firebaseapp.com",
  projectId: "kaamapp-ba949",
  storageBucket: "kaamapp-ba949.appspot.com",
  messagingSenderId: "181251461492",
  appId: "1:181251461492:web:afb27dd0011683428b1c21",
  measurementId: "G-YDD0N1VG60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()
