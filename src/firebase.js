
import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBeVQuA6PuCUC9wtQeOPCh_Umc1nn384YA",
    authDomain: "messenger-clone-fa3ea.firebaseapp.com",
    // databaseURL: "https://messenger-clone.firebaseio.com",
    projectId: "messenger-clone-fa3ea",
    storageBucket: "messenger-clone-fa3ea.appspot.com",
    messagingSenderId: "1063342735738",
    appId: "1:1063342735738:web:3c2b344b1b7ae7366d96c3",
    measurementId: "G-3R8SPEFC1E"
  });

  const db = firebaseApp.firestore();

  export default db;



