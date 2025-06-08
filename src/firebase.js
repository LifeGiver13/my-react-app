// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2DkarzrZ9Y_TtaTrHJNR9UZTQwH_Dj-o",
    authDomain: "formdata-5609b.firebaseapp.com",
    projectId: "formdata-5609b",
    storageBucket: "formdata-5609b.firebasestorage.app",
    messagingSenderId: "958858622949",
    appId: "1:958858622949:web:7faa6d15aefec373b1610c",
    measurementId: "G-17JB83E31M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
