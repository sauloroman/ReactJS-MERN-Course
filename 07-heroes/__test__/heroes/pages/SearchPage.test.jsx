import { fireEvent, render, screen } from '@testing-library/react'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'
import { MemoryRouter } from 'react-router-dom'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Tests in SearchPage Component', () => {

  beforeEach(() => jest.clearAllMocks() )

  test('it must match with snapshot', () => {

    const {container} = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect( container ).toMatchSnapshot()

  })

  test('it should show Batman hero and the input with the value from queryString', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect( input.value ).toBe('batman')

    const batmanImg = screen.getByRole('img')
    expect( batmanImg.src ).toContain('/assets/heroes/dc-batman.jpg')

    const alertError = screen.getByLabelText('alert-error')
    expect( alertError.className ).toContain('hidden')

  })

  test('it should show an error if the hero is not found', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=noexiste']}>
        <SearchPage />
      </MemoryRouter>
    )

    const alertError = screen.getByLabelText('alert-error')
    expect( alertError.className ).not.toContain('hidden')

  })

  test('it should navigate to the proper search page', () => {

    const searchHero = 'superman'

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const inputBox = screen.getByRole('textbox')
    fireEvent.change( inputBox, { target: {name: 'searchHero', value: searchHero } } )

    const form = screen.getByLabelText('form')
    fireEvent.submit( form )

    expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${searchHero}`)

  })

})