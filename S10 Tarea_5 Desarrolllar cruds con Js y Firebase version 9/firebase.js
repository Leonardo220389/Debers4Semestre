// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz5i77KzDp4R2yWewosqyD9mlt46jTREw",
  authDomain: "fir-javascript-crud-2d269.firebaseapp.com",
  projectId: "fir-javascript-crud-2d269",
  storageBucket: "fir-javascript-crud-2d269.appspot.com",
  messagingSenderId: "1076028719064",
  appId: "1:1076028719064:web:56bc1c15a560276644fcad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const savetask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);
