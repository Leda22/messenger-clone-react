import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB32A9Yna-z0wkNtaOEt9GOyxG3xKb1L60",
  authDomain: "mysite-950d6.firebaseapp.com",
  databaseURL: "https://mysite-950d6.firebaseio.com",
  projectId: "mysite-950d6",
  storageBucket: "mysite-950d6.appspot.com",
  messagingSenderId: "125654075278",
  appId: "1:125654075278:web:cd4a036ced243ce864c6df",
  measurementId: "G-RBDX62KJ8Z"
});

const db = firebaseApp.firestore();

export default db;