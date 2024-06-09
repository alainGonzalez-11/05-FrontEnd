import React from 'react'

const MovieCard = ({ media, genres }) => {
  // const loadGenres = () => {
  //   const movieGenres = genres.filter(gen => media.genre_ids.includes(gen.id))
  //   return movieGenres.map(genre => (
  //     <p
  //       key={genre.name + media.name}
  //       className='col text-center bg-primary m-1 text-light rounded-pill align-middle fs-7'
  //     >
  //       {genre.name}
  //     </p>
  //   ))
  // }
  const loadScore = () => {
    const score = Math.round(media.vote_average)
    const scoreIcons = []
    let iconsNumber = 0
    for (let i = 0; i <= score - 2; i = i + 2) {
      scoreIcons.push(
        <i className='bi bi-star-fill text-primary col-auto mx-1' key={media.title + '_icon_' + iconsNumber} />
      )
      iconsNumber++
    }
    if (score % 2 !== 0) {
      scoreIcons.push(
        <i className='bi bi-star-half text-primary col-auto mx-1' key={media.title + '_icon_' + iconsNumber} />
      )
      iconsNumber++
    }
    for (let index = iconsNumber; index < 5; index++) {
      scoreIcons.push(<i className='bi bi-star text-primary col-auto mx-1' key={media.title + '_icon_' + iconsNumber} />)
      iconsNumber++
    }
    return (
      <div className='d-flex mx-2 justify-content-center'>{scoreIcons}</div>
    )
  }
  const loadReleaseDate = () => {
    const date = media.release_date.split('-')
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    return <p className='fs-7 text-primary text-center my-1'>{date[2] + ' ' + months[date[1] - 1] + '. ' + date[0]}</p>
  }
  return (
    <div className='col-5 col-md-3 col-lg-2'>
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
          <h5 className='card-title p-1 lead text-center m-1'>{media.title}</h5>

          {loadScore()}
          {loadReleaseDate()}
          {/* <div className='mx-2 row'>{loadGenres()}</div> */}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
