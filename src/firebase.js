// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVXvR41ARvzG0vDJu_eDTNGjMf3OfQ9mg",
  authDomain: "realtor-a3c4c.firebaseapp.com",
  projectId: "realtor-a3c4c",
  storageBucket: "realtor-a3c4c.appspot.com",
  messagingSenderId: "481615889663",
  appId: "1:481615889663:web:d48fa8cde18131d479f8ca"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()