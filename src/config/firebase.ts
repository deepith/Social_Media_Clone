// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1d5E1e1L6c99h9FsaYVtkjsKO29UNzs8",
  authDomain: "social-media-dk-react.firebaseapp.com",
  projectId: "social-media-dk-react",
  storageBucket: "social-media-dk-react.appspot.com",
  messagingSenderId: "940689904644",
  appId: "1:940689904644:web:14f82c966d6b3ec28c5151",
  measurementId: "G-JYVV4XTX5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)

