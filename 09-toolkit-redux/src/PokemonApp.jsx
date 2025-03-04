import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonsThunk } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const { page, pokemons, isLoading } = useSelector( state => state.pokemons )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getPokemonsThunk() )
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <br />

      <p>Pagina: {page}</p>
      <span>{ isLoading ? 'Cargando...' : 'Finalizado' }</span>

      <ul>
        {
          pokemons.map( ({name}) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>

      <button disabled={isLoading} onClick={() => dispatch( getPokemonsThunk(page - 2) )}>Anterior</button>
      <button disabled={isLoading} onClick={() => dispatch( getPokemonsThunk(page) )}>Siguiente</button>
    </>
  )
}
