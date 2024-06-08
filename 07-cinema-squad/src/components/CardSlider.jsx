import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import MediaCard from './MediaCard'

const CardSlider = ({ mediaList, genres }) => {
  const [chunkSize, setChunksize] = useState(4)

  useEffect(() => {
    // Function to update the variable value based on window width
    const updateVariableValue = () => {
      if (window.innerWidth > 768) {
        setChunksize(5)
      } else {
        setChunksize(4)
      }
    }
    // Event listener for window resize
    window.addEventListener('resize', updateVariableValue)

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateVariableValue)
    }
  }, []) // Empty dependency array ensures this effect runs only once after the initial render

  const renderRows = () => {
    const carouselRows = []
    for (let i = 0; i < mediaList.length; i += chunkSize) {
      const chunk = mediaList.slice(i, i + chunkSize)
      carouselRows.push(
        <Carousel.Item key={i}>
          <div className='row justify-content-center py-3'>
            {chunk.map(item => (
              <MediaCard key={item.id} media={item} genres={genres} />
            ))}
          </div>
        </Carousel.Item>
      )
    }
    return carouselRows
  }

  return (
    <div className='container-fluid mt-5 mb-5'>
      <Carousel indicators={false} controls variant='dark'>
        {renderRows()}
      </Carousel>
    </div>
  )
}

export default CardSlider
