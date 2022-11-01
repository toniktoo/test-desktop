import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: "my-time-d29f3.firebaseapp.com",
  projectId: "my-time-d29f3",
  storageBucket: "my-time-d29f3.appspot.com",
  messagingSenderId: "598156585628",
  appId: process.env.APP_ID_FIREBASE,
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
