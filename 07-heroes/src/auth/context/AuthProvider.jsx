import { useReducer } from "react"
import { v4 as uuidv4 } from 'uuid'
import { AuthContext, authReducer} from "./"
import { types } from "../types/types"

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') ) || null

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, {}, init )

  const login = ( name = '' ) => {
    const user = { id: uuidv4(), name }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify( user ) )

    dispatch( action )
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = { type: types.logout }
    dispatch( action )
  }

  return (
    <AuthContext.Provider value={{
      ...authState,

      login,
      logout, 
    }}>
      { children }
    </AuthContext.Provider>
  )
}
