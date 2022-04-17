// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz3PeIHyWIMkwWu0oVDcpDRL3PqBphaI4",
  authDomain: "assignment10-ace7c.firebaseapp.com",
  projectId: "assignment10-ace7c",
  storageBucket: "assignment10-ace7c.appspot.com",
  messagingSenderId: "231352747065",
  appId: "1:231352747065:web:14ce676ed934d4d87b39e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth