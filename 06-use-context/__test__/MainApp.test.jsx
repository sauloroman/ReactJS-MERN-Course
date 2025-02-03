import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../src/MainApp'

describe('Tests in MainApp Component', () => {

  test('It must match with snapshot', () => {

    const { container } = render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    expect( container ).toMatchSnapshot()

  })

  test('It should show Home Page as a initial page', () => {

    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    const titlePage = screen.getByText('Home Page')
    expect( titlePage ).toBeTruthy()

  })

  test('it must show the login page correctly', () => {

    render(
      <MemoryRouter initialEntries={['/login']} >
        <MainApp />
      </MemoryRouter>
    )

    const loginPageTitle = screen.getByText('Bienvenido a la app')
    expect( loginPageTitle ).toBeTruthy()

  })

  test('it must show the about page correctly', () => {

    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    )

    const aboutPageTitle = screen.getByText('About Page')
    expect( aboutPageTitle ).toBeTruthy()

  })

})