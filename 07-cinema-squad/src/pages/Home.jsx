import { useState, useEffect } from 'react'
import CardSlider from '../components/CardSlider'
import MovieCard from '../components/MovieCard'
import TVCard from '../components/TVCard'
import PeopleCard from '../components/PeopleCard'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [movieGenres, setMovieGenres] = useState([])

  const [series, setSeries] = useState([])
  const [seriesGenres, setSeriesGenres] = useState([])

  const [people, setPeople] = useState([])

  useEffect(() => {
    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const movieCall = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${APIKEY}`
    const moviesGenresCall = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${APIKEY}`

    const seriesCall = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${APIKEY}`
    const seriesGenresCall = `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${APIKEY}`

    const peopleCall = `https://api.themoviedb.org/3/trending/person/day?language=en-US&api_key=${APIKEY}`

    fetch(movieCall)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err))

    fetch(moviesGenresCall)
      .then(response => response.json())
      .then(data => setMovieGenres(data.genres))
      .catch(err => console.error(err))

    fetch(seriesCall)
      .then(response => response.json())
      .then(data => setSeries(data.results))
      .catch(err => console.error(err))

    fetch(seriesGenresCall)
      .then(response => response.json())
      .then(data => setSeriesGenres(data.genres))
      .catch(err => console.error(err))

    fetch(peopleCall)
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div className='container-fluid justify-content-center'>
        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-film fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Featured Movies</p>
        </div>
        <CardSlider
          mediaList={movies}
          genres={movieGenres}
          CardType={MovieCard}
        />

        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-tv fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Featured TV</p>
        </div>
        <CardSlider
          mediaList={series}
          genres={seriesGenres}
          CardType={TVCard}
        />

        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-people fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Featured People</p>
        </div>
        <CardSlider
          mediaList={people}
          genres={seriesGenres}
          CardType={PeopleCard}
        />
      </div>
    </div>
  )
}

export default Home
