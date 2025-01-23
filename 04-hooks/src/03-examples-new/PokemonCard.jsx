import React from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }} className='counter'>
      <p className="counter__value">#{id} - {name}</p>
      <div>
        {
          sprites.map( sprite => (
            <img key={sprite} src={ sprite } alt={name} />
          ))
        }
      </div>
    </section>
  )
}
