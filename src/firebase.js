import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBh3rPlzPh8zLdGChJGOcTWv9-w3Xm-U1U",
  authDomain: "doubaoduck.firebaseapp.com",
  databaseURL: "https://doubaoduck.firebaseio.com",
  projectId: "doubaoduck",
  storageBucket: "doubaoduck.appspot.com",
  messagingSenderId: "847893757602",
  appId: "1:847893757602:web:4f36511d12349ee7eee1fb",
  measurementId: "G-9CXXC6Z62N"
});

export const db = firebaseApp.firestore();
