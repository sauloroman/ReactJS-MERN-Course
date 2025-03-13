import { Provider, useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { LoginPage } from '../../../src/auth/pages/LoginPage'
import { authSlice } from '../../../src/store/auth'
import { MemoryRouter } from 'react-router-dom'
import { notAuthenticatedState } from '../../fixtures/auth.fixtures'

const mockStartGoogleSignIn = jest.fn()
const mockStartLoginWithEmailPassword = jest.fn()

jest.mock('../../../src/store/auth/auth.thunk', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailPassword({ email, password })
  }
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
})

describe('Tests in LoginPage Component', () => {

  beforeEach(() => jest.clearAllMocks())

  test('it should show the component correctly', () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1)

  }),

  test('Google button should call the startGoogleSignIn thunk', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )
    
    const googleBtn = screen.getByLabelText('google-btn')
    fireEvent.click( googleBtn )

    expect( mockStartGoogleSignIn ).toHaveBeenCalled()

  }),

  test('it should called startLoginWithEmailAndPassword when the form is submitted', () => {

    const email = 'roman@email.com'
    const password = '123456'

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    const emailField = screen.getByRole('textbox', { name: 'Correo' })
    fireEvent.change( emailField, { target: { name: 'email', email }})

    const passwordField = screen.getByTestId('password')
    fireEvent.change( passwordField, { target: {name: 'password', password}})

    const form = screen.getByLabelText('submit-form')
    fireEvent.submit( form )

    expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({ email: email, password: password })

  })

})