import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAh1lrd5e8sfTeUawJPSnIo4DSab3GnDQc",
  authDomain: "house-marketplace-app-a3fa6.firebaseapp.com",
  projectId: "house-marketplace-app-a3fa6",
  storageBucket: "house-marketplace-app-a3fa6.appspot.com",
  messagingSenderId: "734440946269",
  appId: "1:734440946269:web:44e3f12a54ce9cf85bebb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()