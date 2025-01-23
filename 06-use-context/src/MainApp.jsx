import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
      <div className="container">
        <h1 className="heading">UseContext</h1>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to={'/'}/>} />
        </Routes>
      </div>
    </UserProvider>
  )
}
