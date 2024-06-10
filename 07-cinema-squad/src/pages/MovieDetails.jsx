import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieHeader from '../components/MovieHeader'
import MediaSection from '../components/MediaSection'

const MovieDetails = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [movieCredits, setMovieCredits] = useState(null)
  const [movieVideos, setMovieVideos] = useState(null)
  const [loadingDetails, setLoadingDetails] = useState(true)
  const [loadingCredits, setLoadingCredits] = useState(true)
  const [loadingVideos, setLoadingVideos] = useState(true)
  const [error, setError] = useState(null)
  const language = 'en-US'
  useEffect(() => {
    setLoadingCredits(true)
    setLoadingDetails(true)
    setLoadingVideos(true)
    setError(null)

    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const movieDetailsCall = `https://api.themoviedb.org/3/movie/${id}?language=${language}&api_key=${APIKEY}`
    const movieCreditsCall = `https://api.themoviedb.org/3/movie/${id}/credits?language=${language}&api_key=${APIKEY}`
    const movieVideoCall = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${APIKEY}`

    fetch(movieDetailsCall)
      .then(res => res.json())
      .then(data => {
        setMovieDetails(data)
        setLoadingDetails(false)
      })
      .catch(err => {
        console.error(err)
        setError(err)
        setLoadingDetails(false)
      })

    fetch(movieCreditsCall)
      .then(res => res.json())
      .then(data => {
        setMovieCredits(data)
        setLoadingCredits(false)
      })
      .catch(err => {
        console.error(err)
        setError(err)
        setLoadingCredits(false)
      })

    fetch(movieVideoCall)
      .then(res => res.json())
      .then(data => {
        setMovieVideos(data.results)
        setLoadingVideos(false)
      })
      .catch(err => {
        console.error(err)
        setError(err)
        setLoadingVideos(false)
      })
  }, [id])

  if (loadingCredits || loadingDetails || loadingVideos) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading Movie data: {error.message}</div>
  }
  return (
    <div className='bg-ultra-dark'>
      <MovieHeader data={movieDetails} credits={movieCredits} />
      <MediaSection videos={movieVideos} />
    </div>
  )
}

export default MovieDetails
