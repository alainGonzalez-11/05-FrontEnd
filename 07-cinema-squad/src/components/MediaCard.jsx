import React from 'react'

const MediaCard = ({ media }) => {
  return (
    <div className='col-3 col-md-2'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{media.title}</h5>
          <p className='card-text'>{media.vote_average}</p>
        </div>
      </div>
    </div>
  )
}

export default MediaCard
