import { useReducer } from "react"
import { todoReducer } from "../helpers/todo.reducer"

const init = () => JSON.parse(localStorage.getItem("todos")) || []

export const useTodos = () => {
    const [todos, dispatch] = useReducer( todoReducer, [], init )
  
    const onAddTodo = function( newTodo = {} ) {
      const actionAdd = {
        type: '[TODO] - Add New todo',
        payload: newTodo,
      }
      dispatch( actionAdd )
    }
  
    const onToggleTodo = function( todoId = '' ) {
      const actionToggle = {
        type: '[TODO] - Toggle todo',
        payload: todoId
      }
      dispatch( actionToggle )
    }
  
    const onDeleteTodo = function( todoId = '' ) {
      const actionDelete = {
        type: '[TODO] - Delete todo',
        payload: todoId,
      }
      dispatch( actionDelete )
    }

    return {
      todos,

      onAddTodo,
      onToggleTodo,
      onDeleteTodo,
    }
}