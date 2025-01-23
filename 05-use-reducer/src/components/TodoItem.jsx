export const TodoItem = ({ onDeleteTodo, onToggleTodo, id, title, description, isCompleted }) => {
  return (
    <div className={`todo ${ isCompleted && 'todo--completed'}`}>
      <div className="todo__info">
        <p className="todo__item-title">{title}</p>
        <p className="todo__description">{description}</p>
      </div>
      <div className="todo__controls">
        <button onClick={ () => onToggleTodo( id ) } className="todo__button todo__button--complete">
          { isCompleted ? 'Habilitar' : 'Completar'}
        </button>
        <button onClick={() => onDeleteTodo( id )} className="todo__button todo__button--delete">Eliminar</button>
      </div>
    </div>
  )
}
