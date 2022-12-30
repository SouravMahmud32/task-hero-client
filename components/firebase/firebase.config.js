// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkKrjBJGq81UqRwZmbLjKSAem2smvyDZE",
  authDomain: "task-hero-f7a24.firebaseapp.com",
  projectId: "task-hero-f7a24",
  storageBucket: "task-hero-f7a24.appspot.com",
  messagingSenderId: "706900950217",
  appId: "1:706900950217:web:200d1fda1bd383876fa118"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () =>{
    return app;
}