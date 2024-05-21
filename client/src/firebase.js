// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zypher-post.firebaseapp.com",
  projectId: "zypher-post",
  storageBucket: "zypher-post.appspot.com",
  messagingSenderId: "822858421537",
  appId: "1:822858421537:web:c88d362484dc8f8d3f1a60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
