import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9q54J6H7TVNL_AC_5zIF4IDJutHc9s2I",
  authDomain: "muso-ninja-c92b2.firebaseapp.com",
  projectId: "muso-ninja-c92b2",
  storageBucket: "muso-ninja-c92b2.appspot.com",
  messagingSenderId: "763979638110",
  appId: "1:763979638110:web:57baec74892264ad239bcf",
};
//init
firebase.initializeApp(firebaseConfig);

//init servs
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, timestamp}