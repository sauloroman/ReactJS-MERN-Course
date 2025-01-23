import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = ( newCategory = '' ) => {
    if ( categories.includes( newCategory.toUpperCase() ) ) return
    setCategories( categories => [ newCategory.toUpperCase(), ...categories ] )
  }

  const onDeleteCategory = ( categoryName = '' ) => {
    setCategories( categories => categories.filter( category => category !== categoryName ))
  }

  return (
    <div className="container">
      <h1 className="title">GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />

      {
        categories.map( category => (
          <GifGrid onDeleteCategory={onDeleteCategory} key={category} category={category} />
        ))
      }
    </div>
  )
}
