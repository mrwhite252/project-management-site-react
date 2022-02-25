import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF2ATY7wBVDgaRhFRdYHVZr5wdLWeuUos",
  authDomain: "the-full-stack-demo.firebaseapp.com",
  projectId: "the-full-stack-demo",
  storageBucket: "the-full-stack-demo.appspot.com",
  messagingSenderId: "900594907089",
  appId: "1:900594907089:web:abf98efeab9978496d12f0",
};

// initialize firebase

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

// time stamp

const timestamp = firebase.firestore.timestamp();
