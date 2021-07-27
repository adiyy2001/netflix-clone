import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACO9_4m7mWLUQOlOY-Mln0JqGZNH4dQnU",
  authDomain: "netflix-clone-f753f.firebaseapp.com",
  projectId: "netflix-clone-f753f",
  storageBucket: "netflix-clone-f753f.appspot.com",
  messagingSenderId: "767274635000",
  appId: "1:767274635000:web:58a169d6d8477ec457f50d",
  measurementId: "G-FVY8WY31K1",
};

const firebase = Firebase.initializeApp(config);
export { firebase };
