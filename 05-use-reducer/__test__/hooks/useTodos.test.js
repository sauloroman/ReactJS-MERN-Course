import { renderHook, act } from '@testing-library/react'
import { useTodos } from "../../src/hooks/useTodos"

describe('Tests in useTodos hook', () => {

  const newTodo = {
    id: 'abc',
    title: 'test title 1',
    description: 'test description 1',
    isCompleted: false,
  }

  beforeEach(() => jest.clearAllMocks() )

  test('it must return the initial state', () => {

    const { result } = renderHook(() => useTodos())
    const { todos, onAddTodo, onToggleTodo, onDeleteTodo } = result.current

    expect( todos ).toEqual([])
    expect( onAddTodo ).toEqual( expect.any(Function) )
    expect( onToggleTodo ).toEqual( expect.any(Function) )
    expect( onDeleteTodo ).toEqual( expect.any(Function) )
  })

  test('it should create an action to add a new todo', () => {

    const { result } = renderHook(() => useTodos())
    const { onAddTodo } = result.current

    act(() => {
      onAddTodo( newTodo )
    })

    const { todos } = result.current

    expect( todos.length ).toBe(1)
    expect( todos.at(-1) ).toEqual( newTodo ) 

  })

  test('it should create an action to delete a todo', () => {

    const { result } = renderHook(() => useTodos())
    const { onAddTodo, onDeleteTodo } = result.current

    act(() => {
      onAddTodo( newTodo )
      onDeleteTodo( newTodo.id )
    })

    const { todos } = result.current

    expect( todos.length ).toBe(0)

  })

  test('it should create an action to toggle status todo', () => {

    const { result } = renderHook(() => useTodos())
    const { onAddTodo, onToggleTodo } = result.current

    act(() => {
      onAddTodo( newTodo )
      onToggleTodo( newTodo.id )
    })

    const { todos } = result.current

    expect( todos.at(-1).isCompleted ).toBe( !newTodo.isCompleted )

  })

})  