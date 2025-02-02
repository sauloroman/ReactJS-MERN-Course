import { fireEvent, render, screen } from "@testing-library/react"
import { TodoAdd } from "../../src/components/TodoAdd"
import { useForm } from "../../src/hooks/useForm"

jest.mock('../../src/hooks/useForm.js')

describe('Tests in TodoAdd Component', () => {

  const onAddTodoMock = jest.fn()

  const onInputChangeMock = jest.fn()
  const onResetFormMock = jest.fn()

  useForm.mockReturnValue({
    formState: { title: '', description: '' },
    title: '',
    description: '',
    onInputChange: onInputChangeMock,
    onResetForm: onResetFormMock
  })

  test('It must match with snapshot', () => {
    const { container } = render(<TodoAdd onAddTodo={onAddTodoMock} />)
    expect( container ).toMatchSnapshot()
  })

  test('It should not call onAddTodo function if the input fields are empty', () => {

    render(<TodoAdd onAddTodo={onAddTodoMock} />)

    const formElement = screen.getByTestId('form-todo')
    fireEvent.submit( formElement )

    expect( onAddTodoMock ).not.toHaveBeenCalled()
    expect( onAddTodoMock ).toHaveBeenCalledTimes(0)

  })

  test('it should call onAddTodo function if the information is set', () => {

    const todoTest = {
      title: 'Title test 1',
      description: 'Description test 1'
    }

    useForm.mockReturnValue({
      formState: todoTest,
      title: todoTest.title,
      description: todoTest.description,
      onInputChange: onInputChangeMock,
      onResetForm: onResetFormMock
    })

    render(<TodoAdd onAddTodo={onAddTodoMock} />)

    const form = screen.getByTestId('form-todo')
    fireEvent.submit( form )

    expect( onAddTodoMock ).toHaveBeenCalledWith({
      ...todoTest,
      id: expect.any( String ),
      isCompleted: false,
    })

  })

})