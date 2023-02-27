import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAejG0h0Z2PPvtynq2f1RWNJgogi4HcnZ8",
  authDomain: "workflow-fcf6b.firebaseapp.com",
  projectId: "workflow-fcf6b",
  databaseURL: "https://workflow-fcf6b-default-rtdb.firebaseio.com",
  storageBucket: "workflow-fcf6b.appspot.com",
  messagingSenderId: "499293300835",
  appId: "1:499293300835:web:d45cfbef482b6015f53056",
  measurementId: "G-EYTFP8DMKJ",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
