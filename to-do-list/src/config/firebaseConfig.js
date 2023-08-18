// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKuQfkaExkYSaTuZoZiJxB7T5tuLliYCU",
  authDomain: "to-do-list-fd618.firebaseapp.com",
  projectId: "to-do-list-fd618",
  storageBucket: "to-do-list-fd618.appspot.com",
  messagingSenderId: "387050442276",
  appId: "1:387050442276:web:2221003dec17f4c3e952b1",
  measurementId: "G-G7JJEX2K8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);