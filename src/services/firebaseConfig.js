import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbjNfdIJAYDRtu8jCyRQfhEYfZFLbe-9c",
  authDomain: "react-vasconi.firebaseapp.com",
  projectId: "react-vasconi",
  storageBucket: "react-vasconi.appspot.com",
  messagingSenderId: "563869741912",
  appId: "1:563869741912:web:ace6d26da40c93e468eb2d"
};


const app = initializeApp(firebaseConfig);

export const baseDeDatos = getFirestore(app);