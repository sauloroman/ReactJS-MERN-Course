import { pokemonApi } from "../../../api/pokemon.api"
import { setPokemons, startLoadingPokemons } from "./pokemon.slice"

export const getPokemonsThunk = ( page = 0 ) => {
  return async ( dispatch, getState ) => {
    dispatch( startLoadingPokemons() )

    // TODO: Realizar peticion http
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)

    dispatch( setPokemons({ page: page + 1, pokemons: data.results }) )
  }
}