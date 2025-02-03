import { render } from '@testing-library/react'
import { HomePage } from '../src/HomePage'

describe('Tests in HomePage Component', () => {

  test('It must match with snapshot', () => {
    const { container } = render(<HomePage />)
    expect( container ).toMatchSnapshot()
  })

  test('It must show the title in an h1 element', () => {
    const { getByRole } = render(<HomePage />)
    const title = getByRole('heading', { level: 1 })
    expect( title ).toBeTruthy()
    expect( title.textContent ).toBe('Home Page')
  })

})