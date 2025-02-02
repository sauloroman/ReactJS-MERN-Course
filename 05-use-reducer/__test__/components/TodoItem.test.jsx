import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/components/TodoItem'

describe('Tests in TodoItem', () => {

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()
  const todoTest = {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    isCompleted: false,
  }

  test('It must match with snapshot', () => {

    const { container } = render(<TodoItem 
      onDeleteTodo={onDeleteTodoMock} 
      onToggleTodo={onToggleTodoMock} 
      { ...todoTest } 
    />)

    expect( container ).toMatchSnapshot()
  })

  test('it must add a class if the todo is completed', () => {

    todoTest.isCompleted = true

    render(<TodoItem 
      onDeleteTodo={onDeleteTodoMock} 
      onToggleTodo={onToggleTodoMock} 
      { ...todoTest } 
    />)

    const todoItem = screen.getByTestId('todo')

    expect( todoItem.className ).toBe('todo todo--completed')

  })

  test('it must display the todo information', () => {

    render(<TodoItem 
      onDeleteTodo={onDeleteTodoMock} 
      onToggleTodo={onToggleTodoMock} 
      { ...todoTest } 
    />)

    const titleInfo = screen.getByText( todoTest.title )
    const descriptionInfo = screen.getByText( todoTest.description )

    expect( titleInfo ).toBeTruthy()
    expect( descriptionInfo ).toBeTruthy()

  })

  test('it must call the corresponding functions when the buttons are pressed', () => {

    render(<TodoItem 
      onDeleteTodo={onDeleteTodoMock} 
      onToggleTodo={onToggleTodoMock} 
      { ...todoTest } 
    />)

    const buttonToggle = screen.getByTestId('button-toggle')
    fireEvent.click( buttonToggle )
    expect( onToggleTodoMock ).toHaveBeenCalledWith( todoTest.id )
    
    const buttonDelete = screen.getByTestId('button-delete')
    fireEvent.click( buttonDelete )
    expect( onDeleteTodoMock ).toHaveBeenCalledWith( todoTest.id )
    
  })

})