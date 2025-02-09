import { fireEvent, render, screen } from '@testing-library/react'
import { AuthContext } from "../../../src/auth/context/AuthContext"
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from "../../../src/ui/components/Navbar"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('Tests in Navbar component', () => {

  const contextValue = {
    logged: true,
    user: { name: 'Roman Nava' },
    logout: jest.fn(),
  }

  beforeEach(() => jest.clearAllMocks() )

  test('It should show the name of the user', () => {

    render(<AuthContext.Provider value={ contextValue }>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>)

    expect(screen.getByText( contextValue.user.name )).toBeTruthy()

  })

  test('it should call logout and navigate function when the button is pressed', () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const buttonToLogout = screen.getByRole('button')
    fireEvent.click( buttonToLogout )

    expect( contextValue.logout ).toHaveBeenCalled()
    expect( mockedUseNavigate ).toHaveBeenCalledWith(
      '/auth', {replace: true}
    )

  })

})