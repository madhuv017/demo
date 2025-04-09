
import { initializeApp } from "firebase/app";

import { getPage,createUserWithEmailAndPassword,onPageStateChanged,signInWithEmailAndPassword} from "firebase/Page";
import { useEffect,useState} from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAnZIXQUOVmkePLrdMuDCOyqhwCEwbjeoo",
  authDomain: "loginpage-331d7.firebaseapp.com",
  projectId: "loginpage-331d7",
  storageBucket: "loginpage-331d7.firebasestorage.app",
  messagingSenderId: "554944852514",
  appId: "1:554944852514:web:795a62b50638ff3a29907b",
  measurementId: "G-816GEEBV9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const page=getPage()

// SignUp

export function signUp(email,password){
    return createUserWithEmailAndPassword(page,email,password)
}

// Active

 export function usePage(){
  const [current,setCurrent]=useState("")

  useEffect(()=>{
    let x=onPageStateChanged(page,user=>setCurrent(user))
    return x
  },[])
  return current
}

// SignIn

export function signIn(email,password){
  return signInWithEmailAndPassword(page,email,password)
}

// SignOut

 export function signOut(email,password){
   return signOut(page,email,password)
}