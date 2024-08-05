// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-11e0f.firebaseapp.com",
  projectId: "mern-blog-11e0f",
  storageBucket: "mern-blog-11e0f.appspot.com",
  messagingSenderId: "321348128821",
  appId: "1:321348128821:web:07a4cdba0b4d757437617c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);