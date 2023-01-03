// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA26lsfg6uaYIumYXJpOu1T6dCg0wffTQQ",
    authDomain: "projektjks-forms.firebaseapp.com",
    databaseURL: "https://projektjks-forms-default-rtdb.firebaseio.com",
    projectId: "projektjks-forms",
    storageBucket: "projektjks-forms.appspot.com",
    messagingSenderId: "437491911211",
    appId: "1:437491911211:web:1f570ca1e1b9f7a352b86e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);