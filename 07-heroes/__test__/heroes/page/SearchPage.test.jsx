import { render } from '@testing-library/react'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'
import { MemoryRouter } from 'react-router-dom'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Tests in SearchPage Component', () => {

  test('it must match with snapshot', () => {

    const {container} = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect( container ).toMatchSnapshot()

  })

})