import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import './Navbar.css'
import '../../containers/containerNavBar.css'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <div id = "logo">
          <img src = '/img/logo/logo-alaska.png' alt = "250" width = "250"/>
      </div>
      <div id = "container-nav-bar">
        <nav id = "navbar">
          <ul>
            <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/">Inicio</Link></li>
            <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/man">Hombres</Link></li>
            <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/woman">Mujeres</Link></li>
            <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/contact">Contacto</Link></li>
            <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/cart"><CartWidget></CartWidget></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar