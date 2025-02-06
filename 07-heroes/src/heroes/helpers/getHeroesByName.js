import { heroes } from "../data/heroes"

/**
 * 
 * @param {String} name 
 */

export const getHeroesByName = ( name = '' ) => {

  name = name.toLowerCase().trim()

  if ( !name.length ) return []

  return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) )

}