import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

const CardSlider = ({ mediaList, CardType }) => {
  const [chunkSize, setChunksize] = useState(5)

  useEffect(() => {
    // Function to update the variable value based on window width
    const updateVariableValue = () => {
      if (window.innerWidth > 992) {
        setChunksize(5)
      } else if (window.innerWidth > 768) {
        setChunksize(3)
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
  }, []) // Empty dependency array ensures this effect runs only once after the initial render

  const renderRows = () => {
    const carouselRows = []
    for (let i = 0; i < mediaList.length; i += chunkSize) {
      const chunk = mediaList.slice(i, i + chunkSize)
      carouselRows.push(
        <Carousel.Item key={i}>
          <div className='row justify-content-center py-3'>
            {chunk.map(item => (
              <CardType
                key={item.id}
                media={item}
              />
            ))}
          </div>
        </Carousel.Item>
      )
    }
    return carouselRows
  }

  return (
    <div className='container-fluid mt-2 mb-2'>
      <Carousel indicators={false} controls variant='dark'>
        {renderRows()}
      </Carousel>
    </div>
  )
}

export default CardSlider
