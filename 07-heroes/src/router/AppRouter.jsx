import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages'
import { HeroesRoutes } from '../heroes/routes'
import { PrivateRoutes, PublicRoutes } from './'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={
          <PublicRoutes>
            <Routes>
              <Route path='/*' element={<LoginPage />} />
            </Routes>
          </PublicRoutes>
        }
      />
      
      <Route path='/*' element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  )
}
