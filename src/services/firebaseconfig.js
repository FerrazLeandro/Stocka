import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDjyrgIz81cX8fLudIyXrJJHM9s-X253BI",
    authDomain: "stocka-2d76f.firebaseapp.com",
    projectId: "stocka-2d76f",
    storageBucket: "stocka-2d76f.appspot.com",
    messagingSenderId: "695591616073",
    appId: "1:695591616073:web:e250a95ccc03ef10440998",
    measurementId: "G-Q6Q1ZVKQDW"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
