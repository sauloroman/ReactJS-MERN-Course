import { heroes } from '../data/heroes'

/**
 * 
 * @param {String} id 
 */

export const getHeroById = ( id = '' ) => {
  return heroes.find( hero => hero.id === id )
}