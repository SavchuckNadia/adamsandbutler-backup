// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHsQErOoiZKD0bq2NUiqS5Rq2UdbON00I",
  authDomain: "luxury-travel-118ec.firebaseapp.com",
  projectId: "luxury-travel-118ec",
  storageBucket: "luxury-travel-118ec.appspot.com",
  messagingSenderId: "359751053966",
  appId: "1:359751053966:web:11781cafa6594a06690fdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}