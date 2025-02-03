import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from '../src/Navbar'

describe('Tests in Navbar Component', () => {

  test('it must match with snapshot', () => {

    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    expect( container ).toMatchSnapshot()

  })

  test('it should have the options to navigate to Home, About and Login page', () => {

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const homeOption = screen.getByText('Home')
    const aboutOption = screen.getByText('About')
    const loginOption = screen.getByText('Login')

    expect( homeOption ).toBeTruthy()
    expect( aboutOption ).toBeTruthy()
    expect( loginOption ).toBeTruthy()

  })

})