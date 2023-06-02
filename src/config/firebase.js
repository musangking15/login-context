// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWuz3hP6tjmEctNwm-Xk7zXxitJqtH0zo",
  authDomain: "projectauth-89c6f.firebaseapp.com",
  projectId: "projectauth-89c6f",
  storageBucket: "projectauth-89c6f.appspot.com",
  messagingSenderId: "428278508237",
  appId: "1:428278508237:web:5782afa151f55fbb775784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
