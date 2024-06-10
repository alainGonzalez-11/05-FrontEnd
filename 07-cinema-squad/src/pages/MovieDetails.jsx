import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieHeader from '../components/MovieHeader'

const MovieDetails = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    setError(null)

    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const movieDetailsCall = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${APIKEY}`

    fetch(movieDetailsCall)
      .then(res => res.json())
      .then(data => {
        setMovieDetails(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading Movie data: {error.message}</div>
  }

  return (
    <div className='bg-ultra-dark'>
      <MovieHeader data={movieDetails} />
    </div>
  )
}

export default MovieDetails
