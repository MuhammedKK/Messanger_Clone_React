// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMUsWWBTNtALqPW4zGgLjOGY4rSd5TgbE",
    authDomain: "messanger-clone-97380.firebaseapp.com",
    projectId: "messanger-clone-97380",
    storageBucket: "messanger-clone-97380.appspot.com",
    messagingSenderId: "153586935690",
    appId: "1:153586935690:web:066c75f40f3569e4e20a73",
    measurementId: "G-1990LNK30C"
  };

const app = initializeApp(firebaseConfig);

export default getFirestore();