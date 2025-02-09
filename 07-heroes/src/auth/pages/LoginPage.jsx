import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()

  const onLogin = () => {

    const lastLogin = localStorage.getItem('lastPath') || '/'

    login('Roman Nava')

    navigate( lastLogin, { replace: true })
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Ingresar</h1>

        <button onClick={ onLogin } className="login__button">Login</button>
      </div>
    </div>
  )
}
