import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieHeader from '../components/MovieHeader'
import MediaSection from '../components/MediaSection'

const MovieDetails = () => {
  const { id } = useParams()
  const [movieInfo, setMovieInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const language = 'en-US'

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

    const endPointNames = ['details', 'credits', 'videos', 'images']

    const apiCalls = [
      `https://api.themoviedb.org/3/movie/${id}?language=${language}&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/movie/${id}/credits?language=${language}&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${APIKEY}`
    ]

    Promise.all(apiCalls.map(endpoint => fetchData(endpoint)))
      .then(results => {
        results.forEach((result, index) => {
          data[endPointNames[index]] = result
        })
        setLoading(false)
        setMovieInfo(data)
      })
      .catch(error => {
        console.error('One or more API calls failed:', error)
      })
  }, [id])

  // ERASE
  // ERASE
  // ERASE

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading Movie data: {error.message}</div>
  }
  return (
    <div className='bg-ultra-dark'>
      <MovieHeader
        data={movieInfo.details}
        credits={movieInfo.credits}
        id='header'
      />
      <MediaSection
        videos={movieInfo.videos.results}
        images={movieInfo.images}
        id='media'
      />
      
    </div>
  )
}

export default MovieDetails
