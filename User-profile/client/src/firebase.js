// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1b8f0.firebaseapp.com",
  projectId: "mern-auth-1b8f0",
  storageBucket: "mern-auth-1b8f0.appspot.com",
  messagingSenderId: "652335913745",
  appId: "1:652335913745:web:6d48b5a3bac0bd572a4ab0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);