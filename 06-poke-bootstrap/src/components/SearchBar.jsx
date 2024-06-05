import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('')
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search...'
            aria-label='Search'
            aria-describedby='button-addon2'
            onChange={event => setSearch(event.target.value)}
            value={search}
          />
          <button
            className='btn btn-outline-secondary'
            type='button'
            id='button-addon2'
            onClick={() => handleSearch(search)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
