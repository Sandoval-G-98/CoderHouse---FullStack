import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import './Navbar.css'
import '../../containers/containerNavBar.css'

const NavBar = () => {
  return (
    <div id = "container-nav-bar">
      <div id = "logo">
        <img src = '/img/logo/logo-alaska.png' alt = "250" width = "250"/>
      </div>
      <div>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Hombres</li>
            <li>Mujeres</li>
            <li>Contacto</li>
            <CartWidget></CartWidget>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar