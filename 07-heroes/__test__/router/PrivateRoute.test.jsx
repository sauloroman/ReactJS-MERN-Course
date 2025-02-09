import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth/context"
import { render, screen } from "@testing-library/react"
import { PrivateRoutes } from "../../src/router/PrivateRoutes"

describe('Tests in PrivateRoute Component', () => {

  test('It should navigate if the user is not logged', () => {

    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={contextValue} >  
        <MemoryRouter initialEntries={['/marvel']}>

          <Routes>
            <Route path="marvel" element={
              <PrivateRoutes>
                <h1>Page not reach</h1>
              </PrivateRoutes>
            }/>
            <Route path="auth" element={<h1>Marvel Page</h1>} />
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Marvel Page') ).toBeTruthy()

  })

  test('it should show children content if the user is logged', () => {

    Storage.prototype.setItem = jest.fn()

    const contextValue = {
      logged: true,
      user: { name: 'Roman Nava', id: '123abc' }
    } 

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoutes>
            <h1>Children Content</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( screen.getByText('Children Content')).toBeTruthy()
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman')

  })

})