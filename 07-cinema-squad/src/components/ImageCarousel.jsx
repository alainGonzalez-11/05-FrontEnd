import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = ({ media, items }) => {
  const [chunkSize, setChunksize] = useState(items[0])

  useEffect(() => {
    // Function to update the variable value based on window width
    const updateVariableValue = () => {
      if (window.innerWidth < 768) {
        setChunksize(items[1])
      } else {
        setChunksize(items[0])
      }
    }
    // Event listener for window resize
    window.addEventListener('resize', updateVariableValue)

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateVariableValue)
    }
  }, [items])

  const renderRows = () => {
    const carouselRows = []
    let total = media.length
    if (total > 12) {
      total = 12
    }
    for (let i = 0; i < total; i += chunkSize) {
      const chunk = media.slice(i, i + chunkSize)
      carouselRows.push(
        <Carousel.Item key={i}>
          <div className='row justify-content-center py-3' key={i + 'car'}>
            {chunk.map((item, index) => (
              <img
                key={item.id + '-' + index}
                className={`rounded-4 border-0 col-${Math.floor(
                  12 / items[1]
                )} col-md-${Math.floor(12 / items[0])}`}
                src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                alt='Movie poster'
              />
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

export default ImageCarousel
