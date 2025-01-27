import { fireEvent, render, screen } from "@testing-library/react"
import { FormWithCustomHook } from "../../src/02-useEffect/FormWithCustomHook"
import { useForm } from "../../src/hooks/useForm"

jest.mock('../../src/hooks/useForm.js')

describe('Tests in FormWithCustomHook', () => {

  const onInputChangeMock = jest.fn()
  const onResetFormMock = jest.fn()
  const formStateMock = {
    username: '',
    email: ''
  }

  useForm.mockReturnValue({
    onInputChange: onInputChangeMock,
    onResetForm: onResetFormMock,
    formState: formStateMock, 
  })

  test('it must match with snapshot', () => {
    const { container } = render(<FormWithCustomHook />)
    expect( container ).toMatchSnapshot()
  })

  test('it should call onInputChange function when input changed', () => {
    render(<FormWithCustomHook />)

    const usernameInput = screen.getByTestId('username-input')
    fireEvent.change( usernameInput, { target: {value: 'hello world'} })

    expect( onInputChangeMock ).toHaveBeenCalled()
  })

  test('it should call the onResetForm function when button is pushed', () => {
    render(<FormWithCustomHook />)

    const buttonReset = screen.getByText('Limpiar formulario')
    fireEvent.click( buttonReset )

    expect( onResetFormMock ).toHaveBeenCalled()
  })

})