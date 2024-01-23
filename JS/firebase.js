// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfFQ3INGqhK4OLs1oYD7L7VG0hwBz-HC0",
  authDomain: "film-43d38.firebaseapp.com",
  projectId: "film-43d38",
  storageBucket: "film-43d38.appspot.com",
  messagingSenderId: "1040201376607",
  appId: "1:1040201376607:web:28c2796bb4df73ac9bccea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the necessary Firestore functionalities
export { db, collection, addDoc, query, where, getDocs, deleteDoc, doc, updateDoc };
