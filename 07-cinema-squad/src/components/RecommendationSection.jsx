import React from 'react'
import CardSlider from './CardSlider'

const CastSection = ({ movieInfo, Card }) => {
  return (
    <div className='container-xl bg-light'>
      <h2>Recommendations</h2>
      <hr className='hr hr-blurry' />
      <CardSlider
        mediaList={movieInfo.recommendations.results}
        genres={movieInfo.genres}
        CardType={Card}
      />
    </div>
  )
}

export default CastSection
