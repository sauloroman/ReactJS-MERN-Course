import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journal.slice"
import { checkingCredentials, login, logout } from "./auth.slice"

export const checkingAuthentication = () => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() )
  }
}

export const startGoogleSignInThunk = () => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() )

    const result = await singInWithGoogle()
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

    dispatch( login( result ) )

  }
}

export const startCreatingUserWithEmailAndPasswordThunk = ({ email, password, displayName }) => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() )

    const result = await registerUserWithEmailAndPassword({ email, password, displayName })
    if ( !result.ok ) return dispatch( logout(result.errorMessage) )

    dispatch( login( result ) ) 
  }
}

export const startLoginWithEmailAndPasswordThunk = ({ email, password }) => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() )

    const result = await loginWithEmailPassword({ email, password })
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

    dispatch( login( result ) )
    
  }
}

export const startLogout = () => {
  return async ( dispatch ) => {
    await logoutFirebase()
    dispatch( clearNotesLogout() )
    dispatch( logout() )
  }
}