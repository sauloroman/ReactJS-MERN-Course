import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const { onInputChange, onResetForm, username, email } = useForm({ username: '', email: '' })

  return (
    <>
      <h2 className="heading">UseEffect &mdash; FormCustomHook</h2>

      <form action="#" className="form">
        <div className="form__field">
          <label htmlFor="username" className="form__label">Nombre del usuario</label>
          <input 
            data-testid="username-input"
            id="username"
            name="username"
            value={username}
            onChange={ onInputChange }
            className="form__input" 
            placeholder="Ingrese su nombre" 
            type="text" 
          />
        </div>
        <div className="form__field">
          <label htmlFor="email" className="form__label">Correo del usuario</label>
          <input 
            data-testid="email-input"
            id="email"
            name="email"
            value={email}
            onChange={ onInputChange }
            className="form__input" 
            placeholder="Ingrese su correo" 
            type="text" 
          />
        </div>

        <button onClick={ onResetForm } className="form__btn">Limpiar formulario</button>
      </form>
    </>
  )
}
