import { useCounter } from "../hooks"
import { useFetchNew } from "../hooks/useFetchNew"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHook = () => {

  const { counter, onIncrementCounter, onDecrementCounter } = useCounter(1)
  const { data, isLoading } = useFetchNew(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
      <h1 className="heading">UseFetchNew</h1>

      { 
        isLoading 
        ? <LoadingMessage /> 
        : (
          <PokemonCard 
            id={data?.id} 
            name={ data?.name } 
            sprites={[ data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny]}
          />)
      }

      <button onClick={ () => counter > 1 ? onDecrementCounter() : null } className="btn">Anterior</button>
      <button onClick={ () => onIncrementCounter() } className="btn">Siguiente</button>
    </>
  )
}
