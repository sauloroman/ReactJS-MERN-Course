import { AuthProvider } from "./auth/context"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <div className="container">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}
