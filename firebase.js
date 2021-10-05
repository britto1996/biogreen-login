import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUVVP3Besum4Ft-MJ-FN18N2l-DYEPYzw",
  authDomain: "bchatapp-13d70.firebaseapp.com",
  projectId: "bchatapp-13d70",
  storageBucket: "bchatapp-13d70.appspot.com",
  messagingSenderId: "780378216724",
  appId: "1:780378216724:web:06ac2124d850eb8d2d8a01",
  measurementId: "G-G3V7LPLNR3",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
