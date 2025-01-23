import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ onDeleteCategory, category }) => {

  const { isLoading, data } = useFetchGifs( category )

  return (
    <div className="gifs">
      <header className="gifs__header">
        <h2 className="category-name">{category[0] + category.slice(1).toLowerCase()}</h2>
        <button onClick={ () => onDeleteCategory(category) } className="btn">Eliminar</button>
      </header>
      {
        isLoading
        ? (<p>Cargando...</p>)
        : (<GifItem gifs={data} />)
      }
    </div>
  )
}
