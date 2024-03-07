// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID
  apiKey: "AIzaSyD8-L3QnqXcX7-XhiUVIpx8jh0EyNM6kDE",
  authDomain: "next-app-1-e16c0.firebaseapp.com",
  projectId: "next-app-1-e16c0",
  storageBucket: "next-app-1-e16c0.appspot.com",
  messagingSenderId: "92428317834",
  appId: "1:92428317834:web:28c14c3899fa0cbebee973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;