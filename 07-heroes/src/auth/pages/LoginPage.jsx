import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/', { replace: true })
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
