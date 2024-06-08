import { useState, useEffect } from 'react'
import CardSlider from '../components/CardSlider'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [movieGenres, setMovieGenres] = useState([])

  useEffect(() => {
    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const call = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${APIKEY}`
    const moviesGenresCall = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${APIKEY}`
    // console.log(APIKEY)
    // fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${APIKEY}`)
    fetch(call)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err))

    fetch(moviesGenresCall)
      .then(response => response.json())
      .then(data => setMovieGenres(data.genres))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Hello</h1>
      <div className='container-fluid justify-content-center'>
        <CardSlider mediaList={movies} genres={movieGenres} />
      </div>
    </div>
  )
}

export default Home
