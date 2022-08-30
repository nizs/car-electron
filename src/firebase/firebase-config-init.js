// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSMTgGLJqtrL3WaVCqXUoRmdgFfBFNeI4",
  authDomain: "car-electro.firebaseapp.com",
  projectId: "car-electro",
  storageBucket: "car-electro.appspot.com",
  messagingSenderId: "58939396238",
  appId: "1:58939396238:web:a22dc6224e231e6f62f9df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;