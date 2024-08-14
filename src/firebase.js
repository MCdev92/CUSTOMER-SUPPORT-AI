// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {signInWithPopup} from "firebase/auth"
import Cookies from "universal-cookie";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBfAv6KkkXigvKXTCtl5AVZ-qFZ6WSMo6c",
  authDomain: "customer-support-ai-a3fd9.firebaseapp.com",
  projectId: "customer-support-ai-a3fd9",
  storageBucket: "customer-support-ai-a3fd9.appspot.com",
  messagingSenderId: "507594702699",
  appId: "1:507594702699:web:4ab203f2286c5e5f43962e",
  measurementId: "G-F9830JXGQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle(){
  const cookies = new Cookies()
  try{
    const result = await signInWithPopup(auth, googleProvider)
    cookies.set("auth-token", await result.user.getIdToken())
  } catch(error){
    console.log(error)
  }
}

