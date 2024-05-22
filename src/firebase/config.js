import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpEoT_2cNXWbZ0CSj3iuYzFn0VI-5DYcI",
  authDomain: "garlicthecheem.firebaseapp.com",
  projectId: "garlicthecheem",
  storageBucket: "garlicthecheem.appspot.com",
  messagingSenderId: "872743507856",
  appId: "1:872743507856:web:6e63e9345ada18a68fc515",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);
const projectStorage = getStorage(app);

// Timestamp
const timestamp = Timestamp;

export { projectAuth, projectFirestore, timestamp, projectStorage };
