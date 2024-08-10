'use client'
import SignInForm from "../ui/SignInForm";
import {signInWithPopup} from "firebase/auth"
import { auth, googleProvider } from "@/src/firebase";

export default function SignIn(){
  async function signInWithGoogle(){
    await signInWithPopup(auth, googleProvider)
  }

  return <SignInForm signInWithGoogle={signInWithGoogle} />
}