import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Tests in GifExpertApp.jsx', () => {

  test('It must match with snapshot', () => {

    const {container} = render(<GifExpertApp />)
    expect( container ).toMatchSnapshot();

  })

  test('It must show app title in an h1 element', () => {

    render(<GifExpertApp />)

    const headingElement = screen.getByRole('heading', {level: 1})
    expect( headingElement.textContent ).toBe('GifExpertApp')

  })

})