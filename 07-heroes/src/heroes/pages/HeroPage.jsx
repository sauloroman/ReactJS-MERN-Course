import { useMemo } from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(id), [id])

  const onNavigateBack = () => {
    navigate(-1)
  }

  if ( !hero ) return <Navigate to='/marvel' />

  return (
    <div className='hero'>
      <div className="hero__pic">
        <img 
          src={`/assets/heroes/${id}.jpg`} 
          alt={hero.superhero} 
          className="hero__img" 
        />
      </div>
      <div className="hero__info">
        <h2 className="hero__page">{hero.superhero}</h2>

        <ul className="hero__list">
          <li className="hero__item">
            Alter ego: <span className="hero__data">{hero.alter_ego}</span>
          </li>
          <li className="hero__item">
            Personajes: <span className='hero__data'>{ hero.characters }</span>
          </li>
          <li className="hero__item">
            Primera Aparición: <span className='hero__data'>{ hero.first_appearance }</span>
          </li>
          <li className="hero__item">
            ID: <span className='hero__data'>{ hero.id }</span>
          </li>
          <li className="hero__item">
            Publicador: <span className='hero__data'>{ hero.publisher }</span>
          </li>
        </ul>

        <button onClick={ onNavigateBack } className="hero__button">Regresar</button>
      </div>
    </div>
  )
}
