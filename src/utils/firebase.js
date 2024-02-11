// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "riwayat-5f909.firebaseapp.com",
  projectId: "riwayat-5f909",
  storageBucket: "riwayat-5f909.appspot.com",
  messagingSenderId: "115519151990",
  appId: "1:115519151990:web:6a5c79052bcf33ac396457"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);