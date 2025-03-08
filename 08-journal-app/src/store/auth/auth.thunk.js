import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNoteLogout } from "../journal/journal.slice"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() )
  }
} 

export const startGoogleSignIn = () => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() )

    const result = await signInWithGoogle()
    
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

    dispatch(login( result ))

  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async ( dispatch ) => {
    
    dispatch( checkingCredentials() )
    
    const result = await registerUserWithEmailPassword({ email, password, displayName })

    if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

    dispatch( login( result ) )

  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() )

    const result = await loginWithEmailAndPassword({ email, password })

    if ( !result.ok ) return dispatch(logout( result.errorMessage ))

    dispatch( login(result) )
  }
}

export const startLogout = () => {
  return async ( dispatch ) => {
    await logoutFirebase() 
    dispatch( clearNoteLogout() )
    dispatch( logout() )
  }
} 