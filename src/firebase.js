import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/analytics';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBrIuil1aWI-ag96vMkuRMHDqSBCrKYThc',
  authDomain: 'messeger-c4bbd.firebaseapp.com',
  databaseURL: 'https://messeger-c4bbd-default-rtdb.firebaseio.com',
  projectId: 'messeger-c4bbd',
  storageBucket: 'messeger-c4bbd.appspot.com',
  messagingSenderId: '543858358104',
  appId: '1:543858358104:web:ba055ea09d370e3bb0d72d',
  measurementId: 'G-72Q3SZSHBL',
};

firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
export const firebaseAuth = getAuth();
export const fs = getFirestore();
export const db = getDatabase();

export const register = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password);
export const login = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);
export const logout = () => signOut(firebaseAuth);
