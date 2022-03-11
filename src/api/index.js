// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCZ2bhH4qP_hh6uRhrgUcf6X5cESxV4i8I',

  authDomain: 'disney-clone-4b7fc.firebaseapp.com',

  projectId: 'disney-clone-4b7fc',

  storageBucket: 'disney-clone-4b7fc.appspot.com',

  messagingSenderId: '65984615615',

  appId: '1:65984615615:web:f9dd837286ec365fc7e20a',
};

// Initialize Firebase

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
