// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5UIQp_mnH_hrNWfTy5RKw2RIe8XpkXkc",
  authDomain: "career-counseling-websit-df0bb.firebaseapp.com",
  projectId: "career-counseling-websit-df0bb",
  storageBucket: "career-counseling-websit-df0bb.firebasestorage.app",
  messagingSenderId: "949493492736",
  appId: "1:949493492736:web:40670b26cc1f7b6e983ce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;