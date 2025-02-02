import { render, screen } from "@testing-library/react"
import { TodoList } from "../../src/components/TodoList"

describe('Tests in TodoList Component', () => {

  const todosMock = [
    {
      id: 'abc',
      title: 'title 1',
      description: 'description 1',
      isCompleted: false,
    },
    {
      id: 'def',
      title: 'title 2',
      description: 'description 2',
      isCompleted: true,
    }
  ]

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  test('it must match with snapshot', () => {  
    const { container } = render(<TodoList />)
    expect( container ).toMatchSnapshot()
  })

  test('it should show all todos', () => {

    render(<TodoList 
      onDeleteTodo={onDeleteTodoMock} 
      onToggleTodo={onToggleTodoMock} 
      todos={todosMock}
    />)

    const todos = screen.getAllByTestId('todo')

    expect( todos.length ).toBe(2)

  })
    
}) 