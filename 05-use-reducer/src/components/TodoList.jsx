import { TodoItem } from './TodoItem'

export const TodoList = ({ onDeleteTodo, onToggleTodo, todos }) => {
  return (
    <div className="todos__list">
      <h2 className="todo__title">Todos Creados</h2>

      <div className="todos__list-grid">
        {
          todos?.map( todo => (
            <TodoItem 
              key={todo.id} 
              onDeleteTodo={onDeleteTodo} 
              onToggleTodo={onToggleTodo} 
              {...todo} 
            />
          ))
        }
      </div>
    </div>
  )
}
