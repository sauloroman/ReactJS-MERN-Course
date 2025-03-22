import { render, screen } from "@testing-library/react"
import { AppRouter } from "../../src/router/AppRouter"
import { useAuthStore } from "../../src/hooks"
import { MemoryRouter } from "react-router-dom"
import { CalendarPage } from "../../src/calendar"

jest.mock('../../src/hooks/useAuthStore.js')

// Para evitar que renderize CalendarPage
jest.mock('../../src/calendar', () => ({
  CalendarPage: () => <h1>CalendarPage</h1>
}))

describe('Tests in <AppRouter/>', () => {

  const mockCheckAuthToken = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('it should show loading screen and call checkAuthToken', () => {

    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken
    })

    render(<AppRouter />)

    expect( screen.getByText('Cargando...') ).toBeTruthy()
    expect( mockCheckAuthToken ).toHaveBeenCalled()

  })
  
  test('it should show login page if an user is not authenticated', () => {

    useAuthStore.mockReturnValue({
      status: 'not-authenticated',
      checkAuthToken: mockCheckAuthToken
    })

    const { container } = render(
      <MemoryRouter initialEntries={['/auth/something']}>
        <AppRouter />
      </MemoryRouter>
    )

    expect( screen.getByText('Ingreso') ).toBeTruthy()
    expect( container ).toMatchSnapshot()
  })

  test('it should show calendar page if an user is authenticated', () => {

    useAuthStore.mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken
    })

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    )

    expect( screen.getByText('CalendarPage') ).toBeTruthy()
  })


})