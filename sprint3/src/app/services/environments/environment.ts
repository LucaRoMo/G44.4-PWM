// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const environment = {
  apiKey: "AIzaSyBHdZrXZa1WQg388dHD7SsCe6uqL6glIBg",
  authDomain: "g44-4-academia-pwm.firebaseapp.com",
  projectId: "g44-4-academia-pwm",
  storageBucket: "g44-4-academia-pwm.appspot.com",
  messagingSenderId: "838893135122",
  appId: "1:838893135122:web:3e7f180077fa4db493bfcb",
  measurementId: "G-G7T91YWTQW"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);
