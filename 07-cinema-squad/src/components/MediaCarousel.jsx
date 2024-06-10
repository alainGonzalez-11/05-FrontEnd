import React from 'react'
import { Carousel } from 'react-bootstrap'

const MediaCarousel = ({ media }) => {
  const renderRows = () => {
    const carouselRows = []
    const chunkSize = 2
    for (let i = 0; i < media.length; i += chunkSize) {
      const chunk = media.slice(i, i + chunkSize)
      carouselRows.push(
        <Carousel.Item key={i}>
          <div className='row justify-content-center py-3'>
            {chunk.map(item => (
              <div className='col-5' key={item.id}>
                <div className='iframe-container' key={item.id}>
                  <iframe
                    className='embed-responsive-item'
                    src={`https://www.youtube.com/embed/${item.key}`}
                    allowFullScreen
                    title='YouTube video'
                    //   style={{ height: '400px', width: '500px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      )
    }
    return carouselRows
  }
  return (
    <div>
      <Carousel indicators={false} controls variant='dark'>
        {renderRows()}
      </Carousel>
    </div>
  )
}

export default MediaCarousel
