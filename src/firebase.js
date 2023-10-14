// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5JmSWXrw7prI15_Gy0VhO4vrlOXfVioA",
  authDomain: "votepoll-7f976.firebaseapp.com",
  projectId: "votepoll-7f976",
  storageBucket: "votepoll-7f976.appspot.com",
  messagingSenderId: "523997837796",
  appId: "1:523997837796:web:64fc5d4dbb077d809feff1",
  measurementId: "G-Z2S1BQ4J0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);