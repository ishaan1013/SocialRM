// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBcYLI-eEpHMEQroY7fkVqutRLy5EWYz3k",
  authDomain: "socialrm-htn.firebaseapp.com",
  projectId: "socialrm-htn",
  storageBucket: "socialrm-htn.appspot.com",
  messagingSenderId: "454954297243",
  appId: "1:454954297243:web:a7e49feda7ced9a830233e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)