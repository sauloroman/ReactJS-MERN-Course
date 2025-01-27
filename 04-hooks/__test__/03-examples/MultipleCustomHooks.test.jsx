import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter, useFetch } from "../../src/hooks"

jest.mock("../../src/hooks/useCounter")
jest.mock("../../src/hooks/useFetch")

describe("Tests in MultipleCustomHooks Components", () => {

  const todoTest = {
    id: 1,
    title: 'Test title',
    userId: 1,
    completed: false,
  }

  const onIncrementCounterMock = jest.fn()
  const onDecrementCounterMock = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    onIncrementCounter: onIncrementCounterMock,
    onDecrementCounter: onDecrementCounterMock
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("The component show a loading message if there is no data", () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    const loadingMessage = screen.getByText("Cargando...")
    expect( loadingMessage ).toBeTruthy()

  })

  test('The component show a todo element when there is data', () => {

    useFetch.mockReturnValue({
      data: todoTest,
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    const todoElement = screen.getByTestId('todo')
    expect( todoElement ).toBeTruthy()

  })

  test('It must call onIncrementCounter and onDecrementCounter functions when buttons are pushed', () => {
    useFetch.mockReturnValue({
      data: todoTest,
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    const buttonIncrement = screen.getByText("Nuevo Todo")
    const buttonDecrement = screen.getByText("Prev Todo")

    fireEvent.click( buttonIncrement )
    fireEvent.click( buttonDecrement )

    expect( onIncrementCounterMock ).toHaveBeenCalled()
    expect( onDecrementCounterMock ).toHaveBeenCalled()

  })

})