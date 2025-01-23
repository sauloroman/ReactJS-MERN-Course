import { render, screen, fireEvent } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Tests in CounterApp', () => {

  const initialValueCounter = 10

  test('It must match with snapshot', () => {
    const { container } = render(<CounterApp value={initialValueCounter} />)
    expect( container ).toMatchSnapshot()
  });

  test('It must show determined counter', () => {

    // const { getByText } = render(<CounterApp value={100} />)
    // expect( getByText('100') ).toBeTruthy()

    render(<CounterApp value={100} />)
    expect( screen.getByText(100) ).toBeTruthy()

  });

  test('It must increment +1 the counter when button is pressed', () => {
  
    render(<CounterApp value={initialValueCounter} />)  
    fireEvent.click( screen.getByText('+1') )
    expect( screen.getByText(`${initialValueCounter + 1}`)).toBeTruthy()

  });

  test('It must decrement -1 the counter when button is pressed', () => {

    render(<CounterApp value={initialValueCounter} />)
    fireEvent.click( screen.getByText('-1') )
    expect( screen.getByText(`${initialValueCounter - 1}`)).toBeTruthy()

  });

  test('It must reset the counter when button is pressed', () => {
    render(<CounterApp value={initialValueCounter} />)
    fireEvent.click( screen.getByText('Reset') )
    expect( screen.getByText( initialValueCounter ) ).toBeTruthy() 
  })

})