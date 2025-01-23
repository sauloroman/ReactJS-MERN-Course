import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const AboutPage = () => {

  const { user } = useContext(UserContext)

  return (
    <div>
      <h1 className="heading__page">About Page</h1>

      <div className="user">
        <p className="user__name">{user.name}</p>
        <p className="user__email">{user.email}</p>
        <p className="user__age">{user.age}</p>
      </div>
    </div>
  )
}
