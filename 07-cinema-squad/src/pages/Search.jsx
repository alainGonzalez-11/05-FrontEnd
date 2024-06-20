import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CardSlider from '../components/CardSlider'
import MovieCard from '../components/MovieCard'
import TVCard from '../components/TVCard'
import PeopleCard from '../components/PeopleCard'

const Home = () => {
  const [media, setMedia] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get('q')

  const fetchData = url => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .catch(error => {
        console.error(error)
        setError(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    setError(null)

    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const data = {}

    const endPointNames = ['movies', 'tv', 'person']

    const apiCalls = [
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/search/person?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=${APIKEY}`
    ]

    Promise.all(apiCalls.map(endpoint => fetchData(endpoint)))
      .then(results => {
        results.forEach((result, index) => {
          data[endPointNames[index]] = result
        })
        setLoading(false)
        setMedia(data)
      })
      .catch(error => {
        console.error('One or more API calls failed:', error)
      })
  }, [searchQuery])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading Movie data: {error.message}</div>
  }

  return (
    <div>
      <div className='container-fluid justify-content-center mt-3'>
        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-film fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Featured Movies</p>
        </div>
        <CardSlider mediaList={media.movies.results} CardType={MovieCard} />

        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-tv fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Featured TV</p>
        </div>
        <CardSlider mediaList={media.tv.results} CardType={TVCard} />

        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-people fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Featured People</p>
        </div>
        <CardSlider mediaList={media.person.results} CardType={PeopleCard} />
      </div>
    </div>
  )
}

export default Home
