import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import MediaCard from './MediaCard'

const CardSlider = ({ mediaList }) => {
  const [chunkSize, setChunksize] = useState(3)

  useEffect(() => {
    // Function to update the variable value based on window width
    const updateVariableValue = () => {
      if (window.innerWidth > 768) {
        setChunksize(5)
      } else {
        setChunksize(3)
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
        <Carousel.Item>
          <div className='row justify-content-center'>
            {chunk.map(item => (
              <MediaCard key={item.id} media={item} />
            ))}
          </div>
        </Carousel.Item>
      )
    }
    return carouselRows
  }

  return (
    <div className='container mt-5 mb-5'>
      <Carousel indicators={false} controls variant='dark'>
        {renderRows()}
      </Carousel>
    </div>
  )
}

export default CardSlider
