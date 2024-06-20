import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import logo from '../assets/CinemaSquadLogo.png'

const Navbar = () => {
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/search?q=${search}`)
  }

  const [search, setSearch] = useState('')
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark d-flex align-items-center px-4'>
      <NavLink to='/' className='navbar-brand'>
        <img src={logo} alt='Cinema Squad' />
      </NavLink>

      <div className='d-flex flex-grow-1 justify-content-center'>
        <form
          className='d-flex input-group w-auto w-50'
          onSubmit={e => {
            e.preventDefault()
            handleSearch()
          }}
        >
          <input
            type='search'
            className='form-control rounded'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='search-addon'
            onChange={event => setSearch(event.target.value)}
            value={search}
          />
          <button
            type='button'
            className='input-group-text border-0'
            id='search-addon'
            onClick={handleSearch}
          >
            <i className='fas fa-search' />
          </button>
        </form>
      </div>

      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#main-nav'
        aria-controls='main-nav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div
        className='collapse navbar-collapse justify-content-end align-center w-auto'
        id='main-nav'
      >
        <ul className='navbar-nav mr-auto mt-2 mt-log-0 w-auto'>
          <li className='nav-item px-2'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item px-2'>
            <NavLink to='/movies' className='nav-link'>
              Movies
            </NavLink>
          </li>
          <li className='nav-item px-2'>
            <NavLink to='/series' className='nav-link'>
              Series
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
