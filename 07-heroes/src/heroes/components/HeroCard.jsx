import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters }) => {
  return ( alter_ego === characters )
  ? <></>
  : <p>{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className="hero-card">

      <div className="hero-card__side hero-card__front">
        <img className="hero-card__image" src={heroImageUrl} alt={superhero} />
      </div>

      <div className="hero-card__side hero-card__back">
        <header className="hero-card__header">
          <p className="hero-card__name">{superhero}</p>
          <p className="hero-card__publisher">{publisher}</p>
        </header>
        <CharactersByHero alter_ego={alter_ego} characters={characters} />
        
        <div>
          <p className="hero-card__first">Primera aparicion: <span>{first_appearance}</span></p>

          <div className="hero-card__buttonbox">
            <Link className='hero-card__button' to={`/hero/${id}`}>Ver más</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
