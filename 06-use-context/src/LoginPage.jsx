import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { setUser } = useContext(UserContext)

  return (
    <div>
      <h1 className="heading__page">Bienvenido a la app</h1>
      <button 
        className="btn"
        onClick={() => setUser({ name: 'Saulo Román', email: 'romansantillan1998@outlook.com', age: 26, })}>Iniciar Sesión</button>
    </div>
  )
}
