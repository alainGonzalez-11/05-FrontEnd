import React from 'react'
import profilePath from '../assets/EmptyPortrait.png'

const PeopleCard = ({ media, genres }) => {
  let imagePath = ''
  if (media.profile_path === null) {
    imagePath = profilePath
  } else {
    imagePath = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.profile_path}`
  }

  const addBackground = () => {
    if (media.known_for[0] !== undefined) {
      return (
        <p className='fs-7 text-tertiary text-center my-1'>
          {'Known for: ' + media.known_for[0].title}
        </p>
      )
    }
  }

  return (
    <div className='col-5 col-md-3 col-lg-2'>
      <div
        className='card h-100 bg-tertiary rounded-4 border-0 shadow'
        style={{ '--bs-bg-opacity': 0.1 }}
      >
        <div className='card-body p-0'>
          <img
            className='card-img-top rounded-4'
            src={imagePath}
            alt='Card image cap'
          />
          <h5 className='card-title p-1 lead text-center'>{media.name}</h5>
          <p className='fs-7 text-tertiary text-center my-1'>
            {media.known_for_department.slice(0, -3) + 'or'}
          </p>
          {addBackground()}
          {/* <p className='fs-7 text-tertiary text-center my-1'>{'Known for: ' + media.known_for[0].title}</p> */}
          {/* <div className='mx-2 row'>{loadGenres()}</div> */}
        </div>
      </div>
    </div>
  )
}

export default PeopleCard
