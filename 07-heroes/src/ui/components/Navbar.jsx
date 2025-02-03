import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <Link className='nav__link' to={'/marvel'}>Asociaciones</Link>
        <NavLink to={'/marvel'} className={({isActive}) => `nav__link ${isActive && 'nav__link--active'}`}>
          <li>Marvel</li>
        </NavLink>
        <NavLink to={'/dc'} className={({isActive}) => `nav__link ${isActive && 'nav__link--active'}`}>
          <li>DC</li>
        </NavLink>
        <NavLink to={'/search'} className={({isActive}) => `nav__link ${isActive && 'nav__link--active'}`}>
          <li>Buscar</li>
        </NavLink>
      </ul>

      <div className="nav__info">
        <div className="nav__name">Román</div>
        <button className="nav__button">Salir</button>
      </div>
    </nav>
  )
}
