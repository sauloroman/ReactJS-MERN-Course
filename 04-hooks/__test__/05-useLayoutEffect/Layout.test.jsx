import { fireEvent, render, screen } from '@testing-library/react'
import { Layout } from '../../src/05-useLayoutEffect/Layout'
import { useCounter, useFetch } from '../../src/hooks'

jest.mock('../../src/hooks/useCounter.js')
jest.mock('../../src/hooks/useFetch.js')

describe('Tests in Layout component', () => {

  beforeEach(() => jest.clearAllMocks() )

  const initialCounterValue = 1
  const onIncrementCounterMock = jest.fn()
  const onDecrementCounterMock = jest.fn()

  useCounter.mockReturnValue({
    counter: initialCounterValue,
    onIncrementCounter: onIncrementCounterMock,
    onDecrementCounter: onDecrementCounterMock
  })

  const testTodo = {
    id: 1,
    title: 'Test todo',
    userId: 1,
    completed: false,
  }

  test('It must show a Loading Message if there is no data', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render(<Layout />)

    const loadingEle = screen.getByTestId('loading')

    expect( loadingEle ).toBeTruthy()

  })

  test('it must show a todo if there is data', () => {

    useFetch.mockReturnValue({
      data: testTodo,
      isLoading: false,
      hasError: null
    })

    render(<Layout />)

    const todoEle = screen.getByTestId('todo')
    
    expect( todoEle ).toBeTruthy()
  
  })

  test('it must call the appropiate function depending the button pressed', () => {

    useFetch.mockReturnValue({
      data: testTodo,
      isLoading: false,
      hasError: null
    })

    render(<Layout />)

    const buttonPrev = screen.getByText('Prev Todo')
    const buttonNext = screen.getByText('Nuevo Todo')
    
    fireEvent.click( buttonPrev )
    expect( onDecrementCounterMock ).toHaveBeenCalled()

    fireEvent.click( buttonNext )
    expect( onIncrementCounterMock ).toHaveBeenCalled()

  })

  test('the buttons must be disabled when it is loading data', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render(<Layout />)

    const buttonPrev = screen.getByText('Prev Todo')
    const buttonNext = screen.getByText('Nuevo Todo')

    expect( buttonPrev.disabled ).toBeTruthy()
    expect( buttonNext.disabled ).toBeTruthy()

  })

})