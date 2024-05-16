// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZZTNhFBecgOoLszv3q_82iYr2M5aBB3Q",
    authDomain: "bridge-of-hope-7f2e4.firebaseapp.com",
    projectId: "bridge-of-hope-7f2e4",
    storageBucket: "bridge-of-hope-7f2e4.appspot.com",
    messagingSenderId: "414317058098",
    appId: "1:414317058098:web:cddaa96194cf403edc042b",
    measurementId: "G-P637M0NXSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const storage = getStorage();
