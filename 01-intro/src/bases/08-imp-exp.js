// import { heroes, owners } from '../data/heroes'
// import heroes from '../data/heroes'
// import heroes, { owners } from '../data/heroes'

// console.log(heroes)
// console.log(owners)


export const getHeroeById = ( heroes = [], id = 1 ) => heroes.find( hero => hero.id === id )

// const hero2 = getHeroeById( heroes, 2 )
// console.log(hero2)

export const getHeroesByOwner = ( heroes = [], owner = '' ) => {
  const heroesFound = heroes.filter( hero => hero.owner === owner )
  return heroesFound
}
// console.log(getHeroesByOwner(heroes, 'Marvel'))
// console.log(getHeroesByOwner(heroes, 'DC'))