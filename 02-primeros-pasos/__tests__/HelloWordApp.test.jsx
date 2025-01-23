import { render } from '@testing-library/react'
import { HelloWorldApp } from '../src/HelloWorldApp'

describe('Tests in HelloWorldApp.jsx', () => {

  const testName = 'Roman'

  test('It must match with snapshot', () => {
    const { container } = render(<HelloWorldApp name={testName} />)
    expect( container ).toMatchSnapshot();
  }),

  test('It must show the name in an h1 element', () => {
    const textInComponent = `Hello ${testName}`
    const { container, getByText, getByTestId } = render(<HelloWorldApp name={testName} />)

    expect( getByText( textInComponent ) ).toBeTruthy();

    const h1 = container.querySelector('h1')
    expect( h1.innerHTML ).toContain(textInComponent)

    expect( getByTestId('test-title').innerHTML ).toContain(textInComponent)
  })

})