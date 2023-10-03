// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; // Import the necessary database functions

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "automatictrashbin-1f7cf.firebaseapp.com",
  databaseURL: "https://automatictrashbin-1f7cf-default-rtdb.firebaseio.com",
  projectId: "automatictrashbin-1f7cf",
  storageBucket: "automatictrashbin-1f7cf.appspot.com",
  messagingSenderId: "766176190708",
  appId: "1:766176190708:web:2fe0bcb92fbd2f36623ea1",
  measurementId: "G-YJHT8R4WZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Use getDatabase to access the Realtime Database
