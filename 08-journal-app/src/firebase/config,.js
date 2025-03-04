import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCJShZwfA1KzAdANM20vfwL-H-AlCEgUsQ",
  authDomain: "journal-app-643b0.firebaseapp.com",
  projectId: "journal-app-643b0",
  storageBucket: "journal-app-643b0.firebasestorage.app",
  messagingSenderId: "70122919900",
  appId: "1:70122919900:web:06d6940f03733c7c9ca119"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore(FirebaseApp)