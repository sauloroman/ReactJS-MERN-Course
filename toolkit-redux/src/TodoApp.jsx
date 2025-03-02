import { useState } from "react"
import { useGetTodoByIDQuery, useGetTodosQuery } from "./store/apis/todos.api"

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)

  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoByIDQuery(todoId)
    
  const onNextTodo = () => {
    setTodoId( todoId + 1 )
  }

  const onPrevTodo = () => {
    if( todoId === 1 ) return 
    setTodoId( todoId - 1 )
  }

  return (
    <div className="container">
      <h1>Todos &mdash; RTK Query</h1>
      <hr />

      <p>IsLoading: { isLoading ? 'True' : 'False'}</p>

      <pre>{JSON.stringify( todo, null, 2)}</pre>
      <button onClick={ onPrevTodo }>Prev Todo</button>
      <button onClick={ onNextTodo }>Next Todo</button>

      {/* <ul>
        {
          todos.map( todo => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'Done ': 'Pending '}</strong>
              {todo.title}
            </li>
          ))
        }
      </ul> */}

    </div>
  )
}
