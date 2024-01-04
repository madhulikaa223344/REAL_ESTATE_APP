// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-296a3.firebaseapp.com",
  projectId: "mern-estate-296a3",
  storageBucket: "mern-estate-296a3.appspot.com",
  messagingSenderId: "370185533142",
  appId: "1:370185533142:web:0c958d73366e76000cfb77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);