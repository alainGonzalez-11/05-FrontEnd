import React from 'react'

const TVHeader = ({ data, credits }) => {
  const loadScore = () => {
    const score = Math.round(data.vote_average)
    const scoreIcons = []
    let iconsNumber = 0
    for (let i = 0; i <= score - 2; i = i + 2) {
      scoreIcons.push(
        <i
          className='bi bi-star-fill col-auto mx-1'
          key={data.title + '_icon_' + iconsNumber}
        />
      )
      iconsNumber++
    }
    if (score % 2 !== 0) {
      scoreIcons.push(
        <i
          className='bi bi-star-half col-auto mx-1'
          key={data.title + '_icon_' + iconsNumber}
        />
      )
      iconsNumber++
    }
    for (let index = iconsNumber; index < 5; index++) {
      scoreIcons.push(
        <i
          className='bi bi-star col-auto mx-1'
          key={data.title + '_icon_' + iconsNumber}
        />
      )
      iconsNumber++
    }
    scoreIcons.push(
      <p className='col-auto mx-1 text-primary fw-bold' key='Rating'>
        {(data.vote_average / 2).toFixed(1)}
      </p>
    )
    return (
      <div className='d-flex mx-2 justify-content-center text-primary'>
        {scoreIcons}
      </div>
    )
  }
  const loadGenres = () => {
    return data.genres.map(genre => (
      <p key={genre.id} className='btn btn-outline-light m-1 rounded-pill fs-7'>
        {genre.name}
      </p>
    ))
  }
  return (
    <div className='container-xl bg-light ' style={{ '--bs-bg-opacity': 0.2 }}>
      <div className='row p-3 justify-content-around'>
        <img
          className='col-5 col-lg-3 rounded-4 border-0'
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt='Movie poster'
        />
        <div className='container-fluid col-6 col-lg-8 mx-3 d-flex flex-column justify-content-around'>
          <div className='row'>
            <div className='col-12 col-lg-8 text-center text-lg-start'>
              <h1 className='fs-3 text-light '>
                {`${data.name} [${data.first_air_date.split('-')[0]} - ${data.last_air_date.split('-')[0]}]`}
              </h1>
              {loadGenres()}
              <p className='text-light fs-5 mb-1'>{`Status: ${data.status} (${data.number_of_seasons} seasons, ${data.number_of_episodes} episodes)`}</p>
            </div>
            <div className='col-12 col-lg-4'>
              <p className='text-light text-center fs-7 mb-1'>Public rating</p>
              <div className='row'>{loadScore()}</div>
            </div>
          </div>
          <div className='row d-none d-sm-block align-self-center'>
            <div className=' text-light fs-4 mb-3 fst-italic'>
              {data.tagline}
            </div>
            <div className='text-light fs-7'>{data.overview}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TVHeader
