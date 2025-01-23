import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    age: '',
  })
  
  const { username, email, age } = formState

  const onInputChange = ({ target: { name, value }}) => {
    setFormState({
      ...formState,
      [name]: value
    })
  }

  // useEffect(() => {
  //   console.log('The component is mounted')
  // }, [])

  // useEffect(() => {
  //   console.log('Username has changed')
  // }, [username])

  // useEffect(() => {
  //   console.log('Email has changed')
  // }, [email])

  // useEffect(() => {
  //   console.log('Age has changed')
  // }, [age])

  return (
    <>
      <h1 className="heading">UseEffect &mdash; Formulario Simple</h1>

      <form action="#" className="form">
        <div className="form__field">
          <label htmlFor="username" className="form__label">Nombre del usuario</label>
          <input 
            name="username"
            value={ username }
            onChange={onInputChange}
            type="text" 
            className="form__input" 
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="form__field">
          <label htmlFor="email" className="form__label">Correo Electrónico</label>
          <input 
            name="email"
            value={ email }
            onChange={onInputChange}
            type="email" 
            className="form__input" 
            placeholder="Ingrese su correo"
          />
        </div>
        <div className="form__field">
          <label htmlFor="age" className="form__label">Edad</label>
          <input 
            name="age"
            value={ age }
            onChange={onInputChange}
            type="number"
            min={1} 
            className="form__input" 
            placeholder="Ingrese su edad"
          />
        </div>
      </form>

      { username === 'Roman' && <Message /> }
    </>
  )
}
