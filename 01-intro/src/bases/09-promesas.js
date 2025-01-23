import heroes from '../data/heroes'
import { getHeroeById } from './08-imp-exp'

// const promise = new Promise(( resolve, _reject ) => {
//   setTimeout(() => {
//     const hero2 = getHeroeById(heroes, 2)
//     resolve( hero2 )
//   }, 2000 )
// })

// promise
//   .then( hero => {
//     for ( const [ key, value ] of Object.entries( hero )) {
//       console.log(`${key.toUpperCase()} ====== ${value}`)
//     }
//   })
//   .catch( err => console.warn( err ))
//   .finally( () => console.log('Fin de la promesa'))

export const getHeroByIdAsync = ( id = 1 ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout(() => {

      const hero = getHeroeById( heroes, id )

      if ( !hero ) {
        reject(`No existe el heroe con id ${id}`)
      } 

      resolve( hero )

    }, 2000 )
  }) 
}


getHeroByIdAsync( 30000 )
  .then( console.log )
  .catch( console.warn )
  .finally( () => console.log('Gracias'))