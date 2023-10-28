import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBk_0QJxhPbzDUsPXsOdAyhEBQFT-rwthc",
    authDomain: "banking-d82ed.firebaseapp.com",
    databaseURL: "https://banking-d82ed-default-rtdb.firebaseio.com",
    projectId: "banking-d82ed",
    storageBucket: "banking-d82ed.appspot.com",
    messagingSenderId: "818526328397",
    appId: "1:818526328397:web:f1634527a4213d2b136e04",
    measurementId: "G-10XXYL1MWZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

