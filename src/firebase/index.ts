import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS6spJNQun31pR0A1tS4CKvj8ek71rsro",
  authDomain: "freeflix-7cdec.firebaseapp.com",
  projectId: "freeflix-7cdec",
  storageBucket: "freeflix-7cdec.appspot.com",
  messagingSenderId: "331750176533",
  appId: "1:331750176533:web:f253b2a05032368cdb1b1c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
