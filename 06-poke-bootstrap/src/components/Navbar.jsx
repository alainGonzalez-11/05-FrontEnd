import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <NavLink to='#' className='navbar-brand'>
        Pokedex
      </NavLink>

      <ul className='navbar-nav mr-auto mt-2 mt-log-0'>
        <li className='nav-item px-2'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink to='/about' className='nav-link'>
            Acerca de Pokemon
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
