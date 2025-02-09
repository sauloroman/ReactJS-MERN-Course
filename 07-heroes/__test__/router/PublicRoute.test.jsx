import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PublicRoutes } from '../../src/router/PublicRoutes'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Tests in PublicRoute component', () => {
  
  test('it should show children content if the user is not authenticated', () => {
    
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoutes>
          <h1>Children Content</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Children Content') ).toBeTruthy()

  })

  test('it should navigate to the correct location when the user is authenticated', () => {

    const contextValue = {
      logged: true,
      user: { id: '123abc', name: 'Roman Nava' }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/auth']}>

          <Routes>
            <Route path='auth' element={
                <PublicRoutes>
                  <h1>Page no reached</h1>   
                </PublicRoutes>
              }
            />
            <Route path='marvel' element={ <h1>New Marvel Page</h1>} />
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('New Marvel Page') ).toBeTruthy()

  })

})