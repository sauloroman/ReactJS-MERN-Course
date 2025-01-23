import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

  const [category, setCategory] = useState('')

  const onSearchGifs = (e) => {
    e.preventDefault();
    if ( category.trim().length === 0 ) return;

    onAddCategory( category )
    setCategory('')
  }

  return (
    <form data-testid='form-add-category' onSubmit={ onSearchGifs } className="form">
      <div className="form__field">
        <input 
          value={category}
          onChange={ e => setCategory(e.target.value) }
          className="form__input"
          placeholder="Ingrese gifs a buscar"
          type="text" 
        />
        <i className='form__icon bx bx-search-alt-2'></i>
      </div>
    </form>
  )
}
