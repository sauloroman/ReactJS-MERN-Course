import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'
import { AuthContext } from '../../src/auth/context'

describe('Tests in AppRouter', () => {

  test('it should show auth page if user is not authenticated', () => {

    const contextValue = { logged: false }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect( screen.getAllByText('Ingresar') ).toBeTruthy()

  })

  test('it should show marvel page if the user is authenticated', () => {

    const contextValue = {
      logged: true,
      user: { name: 'Roman Nava', id: '123abc' }
    } 

    render(
      <MemoryRouter initialEntries={['/auth']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect( screen.getAllByText('Marvel Comics').length ).toBeGreaterThan(1)

  })

})