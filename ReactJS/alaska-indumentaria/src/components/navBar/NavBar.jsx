import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import './Navbar.css'
import '../../containers/containerNavBar.css'
import logoAlaska from '../../img/logo-alaska.png'

const NavBar = () => {
  return (
    <div id = "container-nav-bar">
      <div id = "logo">
        <img src = {logoAlaska} alt = "250" width = "250"/>
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