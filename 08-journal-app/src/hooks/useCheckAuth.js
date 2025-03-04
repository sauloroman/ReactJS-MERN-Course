import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config,"
import { login, logout } from "../store/auth"

export const useCheckAuth = () => {
  const dispath = useDispatch()
  const { status } = useSelector(state => state.auth)

  useEffect(() => {

    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispath( logout() )
      const { uid, email, photoURL, displayName} = user
      dispath( login({ uid, email, photoURL, displayName}) )
    })

  }, [])

  return status
  
}