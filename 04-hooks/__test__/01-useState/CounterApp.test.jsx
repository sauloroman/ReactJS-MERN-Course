import { render, fireEvent } from '@testing-library/react'
import { CounterApp } from '../../src/01-useState/CounterApp'

describe('Tests in CounterApp', () => {

  test('It must match with the snapshot', () => {
    const { container } = render(<CounterApp />)
    expect( container ).toMatchSnapshot() 
  })

  test('It must show the three counters correctly', () => {

    const { getAllByRole } = render(<CounterApp />)

    const counters = getAllByRole('heading', { level: 2 })

    expect( counters.length ).toBe(3)

    expect( counters[0].textContent ).toBe('10')
    expect( counters[1].textContent ).toBe('20')
    expect( counters[2].textContent ).toBe('30')

  })

  test('It must increment the appropiate counter depending the button pushed', () => {

    const { getByText, getByTestId } = render(<CounterApp />)

    const buttonCounter1 = getByText('Aumentar 1')
    fireEvent.click( buttonCounter1 )
    const counter1 = getByTestId('counter-1')

    const buttonCounter2 = getByText('Aumentar 2')
    fireEvent.click( buttonCounter2 )
    const counter2 = getByTestId('counter-2')

    expect( counter1.textContent ).toBe("11")
    expect( counter2.textContent ).toBe("21")

  })

})