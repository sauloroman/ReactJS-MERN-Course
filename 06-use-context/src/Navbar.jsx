import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <NavLink to={'/'} className={ ({isActive}) => `${isActive && 'nav__item--active'} nav__item` }>
          <li className='nav__text'>Home</li>
        </NavLink>
        <NavLink to={'/about'} className={ ({isActive}) => `${isActive && 'nav__item--active'} nav__item` }>
          <li className='nav__text'>About</li>
        </NavLink>
        <NavLink to={'/login'} className={ ({isActive}) => `${isActive && 'nav__item--active'} nav__item` }>
          <li className='nav__text'>Login</li>
        </NavLink>
      </ul>
    </div>
  )
}
