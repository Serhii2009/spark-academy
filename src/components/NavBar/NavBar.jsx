import './NavBar.css'

import { useState } from 'react'
import { assets } from '../../assets/assets'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="logo" src={assets.logo} alt="Spark Language Academy" />

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#">Головна сторінка</a>
          </li>
          <li>
            <a href="#">Курси</a>
          </li>
          <li>
            <a href="#">Пройти тест</a>
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

      {/* Модальне меню для мобільної версії */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#">Головна сторінка</a>
            </li>
            <li>
              <a href="#">Курси</a>
            </li>
            <li>
              <a href="#">Пройти тест</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar
