import { render, screen, fireEvent } from '@testing-library/react'
import { UserContext } from '../src/context/UserContext'
import { LoginPage } from '../src/LoginPage'

describe('Tests in LoginPage Component', () => {

  test('it must match with snapshot', () => {

    const { container } = render(
      <UserContext.Provider value={{}}>
        <LoginPage />
      </UserContext.Provider>
    ) 

    expect( container ).toMatchSnapshot()

  })

  test('It must show the component at the initial state', () => {

    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const buttonToSetUser = screen.getByRole('button')
    expect( buttonToSetUser ).toBeTruthy()
    expect( buttonToSetUser.textContent ).toBe('Iniciar Sesión')

    const titleComponent = screen.getByRole('heading', { level: 1 })
    expect( titleComponent ).toBeTruthy()
    expect( titleComponent.textContent ).toBe('Bienvenido a la app')

  })

  test('It must call the function to set a user if button is pressed', () => {

    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByRole('button')
    fireEvent.click( button )

    expect( setUserMock ).toHaveBeenCalled()
    expect( setUserMock ).toHaveBeenCalledWith({
      name: 'Saulo Román', 
      email: 'romansantillan1998@outlook.com', 
      age: 26, 
    })

  })

})