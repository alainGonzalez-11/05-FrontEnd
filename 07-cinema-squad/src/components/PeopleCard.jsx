import React from 'react'

const PeopleCard = ({ media, genres }) => {
  return (
    <div className='col-5 col-md-3 col-lg-2'>
      <div
        className='card h-100 bg-tertiary rounded-4 border-0 shadow'
        style={{ '--bs-bg-opacity': 0.1 }}
      >
        <div className='card-body p-0'>
          <img
            className='card-img-top rounded-4'
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.profile_path}`}
            alt='Card image cap'
          />
          <h5 className='card-title p-1 lead text-center'>{media.name}</h5>
          <p className='fs-7 text-tertiary text-center my-1'>{media.known_for_department.slice(0, -3) + 'or'}</p>
          <p className='fs-7 text-tertiary text-center my-1'>{'Known for: ' + media.known_for[0].title}</p>
          {/* <div className='mx-2 row'>{loadGenres()}</div> */}
        </div>
      </div>
    </div>
  )
}

export default PeopleCard
