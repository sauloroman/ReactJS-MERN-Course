import { render, fireEvent, screen } from "@testing-library/react"
import { CounterAppWithCustomHook } from "../../src/01-useState/CounterAppWithCustomHook"
import { useCounter } from '../../src/hooks/useCounter'

jest.mock('../../src/hooks/useCounter.js')

describe('Tests in CounterAppWithCustomHook', () => {

  const counterValue = 1
  const onDecrementCounterMock = jest.fn()
  const onIncrementCounterMock = jest.fn()
  const onResetCounterMock = jest.fn()
  
  useCounter.mockReturnValue({
    counter: counterValue,
    onDecrementCounter: onDecrementCounterMock,
    onIncrementCounter: onIncrementCounterMock,
    onResetCounter: onResetCounterMock,
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('It must match with snapshot', () => {
    const { container } = render(<CounterAppWithCustomHook />)
    expect( container ).toMatchSnapshot();
  })

  test('it must show the counter', () => {
    render(<CounterAppWithCustomHook />)
    const counterElem = screen.getByTestId('counter')
    expect( counterElem.textContent ).toBe(String( counterValue ))
  })

  test('It must call onIncrementCounter function when the appropiate button is pushed', () => {
    render(<CounterAppWithCustomHook />)

    const buttonIncrement = screen.getByRole('button', { name: '+1' } )
    fireEvent.click( buttonIncrement )

    expect( onIncrementCounterMock ).toHaveBeenCalled()
  })

  test('It must call onDecrementCounter function when the appropiate button is pushed', () => {

    render( <CounterAppWithCustomHook /> )

    const buttonDecrement = screen.getByRole('button', { name: '-1' } )
    fireEvent.click( buttonDecrement )

    expect( onDecrementCounterMock ).toHaveBeenCalled()
  })

  test('It must call onResetCounter function when the appropiate button is pushed', () => {

    render( <CounterAppWithCustomHook /> )

    const buttonReset = screen.getByRole('button', { name: 'Reset' } )
    fireEvent.click( buttonReset )

    expect( onResetCounterMock ).toHaveBeenCalled()
  })

})