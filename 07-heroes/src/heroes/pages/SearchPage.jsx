import queryString from 'query-string'
import { useLocation, useNavigate } from "react-router-dom"
import { getHeroesByName } from '../helpers'
import { useForm } from '../../../src/hooks/useForm'
import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse( location.search )
  const heroes = getHeroesByName( q )

  const showSearch = ( q.length === 0 )
  const showError = ( q.length > 0 ) && heroes.length === 0

  const { searchHero, onInputChange } = useForm({
    searchHero: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchHero}`)
  }
  
  return (
    <div className="search">
      <h1 className="search__title">Búsqueda</h1>

      <div className="search__grid">
        <div className="search__content">
          <h2 className="search__subtitle">Encuentra tu heroe</h2>
          <form aria-label='form' onSubmit={ onSearchSubmit } className="search__form">
            <input
              placeholder="Ingresa el nombre de tu heroe favorito" 
              type="text" 
              className="search__input"
              autoComplete="off"
              name='searchHero'
              value={ searchHero }
              onChange={ onInputChange }
            />
            <button className="search__button">Buscar</button>
          </form>
        </div>
        <div className="search__alerts">
          <h2 className="search__subtitle">Resultados</h2>

          <div className={`search__alert search__alert--success ${ showSearch || 'hidden' }`}>
            Busca un heroe
          </div>

          <div aria-label='alert-error' className={`search__alert search__alert--error ${ showError || 'hidden' }`}>
            No se encontró al heroe <span className='strong'>{q}</span>
          </div>

          <div className="search__results">
            {
              heroes.map( hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
          </div>

        </div>

      </div>

    </div>
  )
}
