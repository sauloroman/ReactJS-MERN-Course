import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config,";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

  try {
    
    const result = await signInWithPopup( FirebaseAuth, googleProvider )
    const user = result.user
    const { displayName, email, photoURL, uid } = user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      errorMessage: error.message
    }
  }

}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

  try {
  
    const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
    const { uid, photoURL } = result.user
    
    await updateProfile( FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid, photoURL, displayName, email
    }

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      errorMessage: error.message
    }
  }

}

export const loginWithEmailAndPassword = async ({ email, password }) => {

  try {

    const result = await signInWithEmailAndPassword( FirebaseAuth, email, password )
    const { uid, displayName, photoURL } = result.user

    return {
      ok: true,
      uid, displayName, photoURL, email
    }

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      errorMessage: error.message
    }
  }

}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut()
}