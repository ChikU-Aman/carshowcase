import React from 'react'
import { Image, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assests/logo.png'
const NavBar = () => {
  return (
    <header className='header__container'>
        <nav className='header__navbar'>
            <NavLink className='navbar__logo'>
                <Image style={{"objectFit":"contain"}}
                src={logo}
                alt='logo'
                width={118}
                height={18}>
                </Image>
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar