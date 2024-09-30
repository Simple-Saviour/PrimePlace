// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primeplace-c822d.firebaseapp.com",
  projectId: "primeplace-c822d",
  storageBucket: "primeplace-c822d.appspot.com",
  messagingSenderId: "1009446308794",
  appId: "1:1009446308794:web:80e7be53dbf2d4fef9ab83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);