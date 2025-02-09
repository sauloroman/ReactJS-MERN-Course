import { registerUserWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers"
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