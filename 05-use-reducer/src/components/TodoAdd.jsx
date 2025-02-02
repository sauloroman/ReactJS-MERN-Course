import { v4 as uuidv4 } from 'uuid'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onAddTodo }) => {

  const { formState, title, description, onInputChange, onResetForm } = useForm({
    title: '',
    description: '',
  })

  const onCreateTodo = (e) => {
    e.preventDefault()

    if ( 
      title.trim().length === 0 || 
      description.trim().length === 0 
    ) return

    formState.id = uuidv4()
    formState.isCompleted = false

    onAddTodo(formState)
    onResetForm()
  }

  return (
    <div className="todo__add">
      <h2 className="todo__title">Agregar nuevo todo</h2>

      <form data-testid='form-todo' onSubmit={ onCreateTodo } action="#" className="todo__form">
        <div className="todo__form-field">
          <label htmlFor="todo-title" className="todo__form-label">Título</label>
          <input
            data-testid='todo-input-title'
            name='title'
            value={title}
            onChange={ onInputChange }
            id='todo-title'
            placeholder="Agrega un título"
            className="todo__form-input" 
            type="text" 
          />
        </div>
        <div className="todo__form-field">
          <label htmlFor="todo-description" className="todo__form-label">Descripción</label>
          <textarea
            data-testid='todo-input-description'
            className='todo__textarea'
            name='description'
            value={description}
            onChange={onInputChange}
            id="todo-description" 
            placeholder='Agrega una descripción '></textarea>
        </div>
        <div className="todo__form-box">
          <button className="todo__form-button">Agregar</button>
        </div>
      </form>

    </div>
  )
}
