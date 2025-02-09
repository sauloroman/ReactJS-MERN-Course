import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {

  try {
  
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {
    
    const errorMessage = error.message

    return {
      ok: false,
      errorMessage
    }

  }

}

export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {

  try {
  
    const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password )
    const { uid, photoURL } = res.user

    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName
    }

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      errorMessage: error.message
    }
  }

}