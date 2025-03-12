import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '@testing-library/react'
import { LoginPage } from '../../../src/auth/pages/LoginPage'
import { authSlice } from '../../../src/store/auth'
import { MemoryRouter } from 'react-router-dom'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  // preloadedState: {}
})

describe('Tests in LoginPage Component', () => {

  test('it should show the component correctly', () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1)

  })

})