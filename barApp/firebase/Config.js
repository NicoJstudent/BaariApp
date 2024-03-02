import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
//import dotenv from 'dotenv';

//dotenv.config();

const firebaseConfig = {

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

