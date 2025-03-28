import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './NavBar.css'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="logo" src={assets.logo} alt="Spark Language Academy" />

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Головна сторінка
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Курси
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Пройти тест
            </NavLink>
          </li>
        </ul>

        <div className="navbar-left-side">
          <button className="contact-btn-mobile">Зв’язатися</button>
          <button className="contact-btn">Зв’язатися з нами</button>

          <img
            onClick={() => setMenuOpen(!menuOpen)}
            src={assets.burger_menu}
            alt="Menu"
            className="burger-icon"
          />
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                Головна сторінка
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                Курси
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/test"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                Пройти тест
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar
