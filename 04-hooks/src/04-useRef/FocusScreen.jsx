import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef()

  const onFocusInput = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <h1 className="heading">UseRef &mdash; InputFocus</h1>

      <form action="#" className="form">
        <div className="form__field">
          <input ref={inputRef} placeholder="Presiona el boton..." type="text" className="form__input" />
        </div>

        <button onClick={ onFocusInput } className="btn">Seleccionar el input</button>
      </form>
    </>
  )
}
