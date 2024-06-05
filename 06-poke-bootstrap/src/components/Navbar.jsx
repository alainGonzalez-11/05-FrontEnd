import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <a href='#' className='navbar-brand'>
        Pokedex
      </a>

      <ul className='navbar-nav mr-auto mt-2 mt-log-0'>
        <li className='nav-item px-2'>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>
        <li className='nav-item px-2'>
          <a href='/about' className='nav-link'>
            Acerca de Pokemon
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
