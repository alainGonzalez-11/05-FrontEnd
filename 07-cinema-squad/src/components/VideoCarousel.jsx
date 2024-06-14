import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

const VideoCarousel = ({ media }) => {
  const [chunkSize, setChunksize] = useState(2)

  useEffect(() => {
    // Function to update the variable value based on window width
    const updateVariableValue = () => {
      if (window.innerWidth < 768) {
        setChunksize(1)
      } else {
        setChunksize(2)
      }
    }
    // Event listener for window resize
    window.addEventListener('resize', updateVariableValue)

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateVariableValue)
    }
  }, [])

  const renderRows = () => {
    const carouselRows = []
    let total = media.length
    if (total > 6) {
      total = 6
    }
    for (let i = 0; i < total; i += chunkSize) {
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

export default VideoCarousel
