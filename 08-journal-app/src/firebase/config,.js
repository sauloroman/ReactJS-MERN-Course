import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";

// console.log(process.env)
// console.log(import.meta.env)

const envs = getEnvironments()
console.log(envs)

// Produccion
// const firebaseConfig = {
//   apiKey: "AIzaSyCJShZwfA1KzAdANM20vfwL-H-AlCEgUsQ",
//   authDomain: "journal-app-643b0.firebaseapp.com",
//   projectId: "journal-app-643b0",
//   storageBucket: "journal-app-643b0.firebasestorage.app",
//   messagingSenderId: "70122919900",
//   appId: "1:70122919900:web:06d6940f03733c7c9ca119"
// };

// Testing
const firebaseConfig = {
  apiKey: "AIzaSyBNyKAd4-sx2j_8SKSJVtHYaiOcnPMLHIw",
  authDomain: "journal-app-testing-7a123.firebaseapp.com",
  projectId: "journal-app-testing-7a123",
  storageBucket: "journal-app-testing-7a123.firebasestorage.app",
  messagingSenderId: "989321931655",
  appId: "1:989321931655:web:902c6fb8165326e1f88122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore(FirebaseApp)