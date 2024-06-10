import { useState, useEffect } from 'react'
import CardSlider from '../components/CardSlider'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [movieGenres, setMovieGenres] = useState([])

  useEffect(() => {
    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const nowPlayingMoviesCall = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${APIKEY}`
    const popularMoviesCall = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${APIKEY}`
    const topRatedMoviesCall = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${APIKEY}`
    const upcomingMoviesCall = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${APIKEY}`
    const moviesGenresCall = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${APIKEY}`

    fetch(nowPlayingMoviesCall)
      .then(response => response.json())
      .then(data => setNowPlayingMovies(data.results))
      .catch(err => console.error(err))

    fetch(popularMoviesCall)
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
      .catch(err => console.error(err))

    fetch(topRatedMoviesCall)
      .then(response => response.json())
      .then(data => setTopRatedMovies(data.results))
      .catch(err => console.error(err))

    fetch(upcomingMoviesCall)
      .then(response => response.json())
      .then(data => setUpcomingMovies(data.results))
      .catch(err => console.error(err))

    fetch(moviesGenresCall)
      .then(response => response.json())
      .then(data => setMovieGenres(data.genres))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div className='container-fluid justify-content-center mt-3'>
        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-film fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Movies Now Playing</p>
        </div>
        <CardSlider
          mediaList={nowPlayingMovies}
          genres={movieGenres}
          CardType={MovieCard}
        />

        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-film fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Popular Movies</p>
        </div>
        <CardSlider
          mediaList={popularMovies}
          genres={movieGenres}
          CardType={MovieCard}
        />

        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-film fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Top Rated Movies</p>
        </div>
        <CardSlider
          mediaList={topRatedMovies}
          genres={movieGenres}
          CardType={MovieCard}
        />

        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-film fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Upcoming Movies</p>
        </div>
        <CardSlider
          mediaList={upcomingMovies}
          genres={movieGenres}
          CardType={MovieCard}
        />
      </div>
    </div>
  )
}

export default Home
