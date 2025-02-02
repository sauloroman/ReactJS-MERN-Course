import { useEffect } from 'react'
import { TodoAdd } from './components/TodoAdd.jsx'
import {TodoList} from './components/TodoList.jsx'
import { useTodos } from './hooks/useTodos.js'

import './helpers/intro-reducer.js'

export const TodoApp = () => {

  const { onAddTodo, onDeleteTodo, onToggleTodo, todos } = useTodos()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) )
  }, [todos])

  return (
    <div className='todos'>

      <div className="todos__header">
        <h1 className='todos__title'>TodosApp</h1>
      </div>

      <div className="todos__grid">
        <TodoAdd onAddTodo={ onAddTodo } />
        <TodoList   
          onDeleteTodo={onDeleteTodo} 
          onToggleTodo={onToggleTodo} 
          todos={todos} 
        />
      </div>

    </div>
  )
}
