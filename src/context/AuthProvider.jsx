import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';



const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user, setUser] = useState("Mst Naher");

const createUserWithEmailAndPasswordFunc = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signInWithEmailAndPasswordFunc = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signInWithEmailFunc = ()=>{
  return  signInWithPopup(auth, googleProvider)
}

const signoutUser = ()=>{
  return signOut(auth);
}
const authInfo = {
  user,
  setUser,
  createUserWithEmailAndPasswordFunc,
  signInWithEmailAndPasswordFunc,
  signInWithEmailFunc,
  signoutUser,
};



  return <AuthContext value={authInfo} >{children}</AuthContext>;
};

export default AuthProvider;