import React from 'react'

const MediaCard = ({ media, genres }) => {
  const loadGenres = () => {
    const movieGenres = genres.filter(gen => media.genre_ids.includes(gen.id))
    return movieGenres.map(genre => (
      <p
        key={genre.name + media.name}
        className='col text-center bg-primary m-1 text-light rounded-pill align-middle fs-7'
      >
        {genre.name}
      </p>
    ))
  }
  return (
    <div className='col-3 col-md-2 '>
      <div
        className='card h-100 bg-primary rounded-4 border-0 shadow'
        style={{ '--bs-bg-opacity': 0.1 }}
      >
        <div className='card-body p-0'>
          <img
            className='card-img-top rounded-4'
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`}
            alt='Card image cap'
          />
          <h5 className='card-title p-2 fs-5 text-center'>{media.title}</h5>
          <div className='mx-2 row'>{loadGenres()}</div>
          <i className='bi bi-stars text-primary'> {media.vote_average}</i>
        </div>
      </div>
    </div>
  )
}

export default MediaCard
