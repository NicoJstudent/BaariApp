import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
//import dotenv from 'dotenv';

//dotenv.config();

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


initializeApp(firebaseConfig);

const firestore = getFirestore();

const RECIPE = 'recipe';

export {
    firestore,
    collection,
    addDoc,
    RECIPE
}

