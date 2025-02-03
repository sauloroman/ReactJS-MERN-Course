import { render, screen } from '@testing-library/react'
import { UserContext } from '../src/context/UserContext'
import { AboutPage } from '../src/AboutPage'

describe('Tests in AboutPage Component', () => {

  test('It must show a message if there is no user', () => {

    render(
      <UserContext.Provider value={{}}>
        <AboutPage />
      </UserContext.Provider>
    )

    expect( screen.getByTestId('no-user').textContent ).toBe('No hay usuario')

  })

  test('it must show an user', () => {

    const userTest = {name: 'Roman', email: 'roman@email.com', age: 26 }

    render(
      <UserContext.Provider value={{ user: userTest }}>
        <AboutPage />
      </UserContext.Provider>
    )

    const userName = screen.getByText( userTest.name )
    const userEmail = screen.getByText( userTest.email )
    const userAge = screen.getByText( userTest.age )

    expect( userName ).toBeTruthy()
    expect( userEmail ).toBeTruthy()
    expect( userAge ).toBeTruthy()

  })

})