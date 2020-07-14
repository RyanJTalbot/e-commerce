import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDXPmgANUaV51n2e8FsDNwHJemIi44wN08",
  authDomain: "e-commerce-e3602.firebaseapp.com",
  databaseURL: "https://e-commerce-e3602.firebaseio.com",
  projectId: "e-commerce-e3602",
  storageBucket: "e-commerce-e3602.appspot.com",
  messagingSenderId: "43772832973",
  appId: "1:43772832973:web:8be675802caff672048d84",
  measurementId: "G-XC0KVE3V7L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;