import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtqhqUgf7tYCtFGPFXIi10tlbSoshh5dU",
  authDomain: "kloud-resume-database.firebaseapp.com",
  projectId: "kloud-resume-database",
  storageBucket: "kloud-resume-database.appspot.com",
  messagingSenderId: "814453246180",
  appId: "1:814453246180:web:020a23b9c8c9597c6dc4f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore();

export default storage;
