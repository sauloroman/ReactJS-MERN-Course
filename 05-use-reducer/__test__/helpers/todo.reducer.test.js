import { act } from "react"
import { todoReducer } from "../../src/helpers/todo.reducer"

describe('Tests in todo.reducer', () => {

  const initialState = []

  const todoTest = {
    id: 'abc',
    title: 'todo title 1',
    description: 'todo description 1',
    isCompleted: false,
  }

  const actionAdd = {
    type: '[TODO] - Add New todo',
    payload: todoTest
  }

  test('It must return original state if action is not valid', () => {

    const state = todoReducer( initialState, {} )
    expect( state ).toEqual( initialState )

  })

  test('it must add a new todo', () => {

    const newState = todoReducer( initialState, actionAdd )

    expect( newState.length ).toBe( initialState.length + 1 )
    expect( newState.at(-1) ).toEqual( todoTest )

  })

  test('it must delete a todo by its id', () => {

    const action = {
      type: '[TODO] - Delete Todo',
      payload: todoReducer.id,
    }

    const newState = todoReducer( initialState, action )

    expect( newState.length ).toBe( initialState.length )
  })

  test('it must toggle todo status', () => {

    const todoAdded = todoReducer( initialState, actionAdd )

    const action = {
      type: '[TODO] - Toggle todo',
      payload: todoTest.id
    }

    const newState = todoReducer( todoAdded, action )
    expect( newState.at(-1).isCompleted ).toBe( !todoTest.isCompleted )

  })

})