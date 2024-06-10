import { useState, useEffect } from 'react'
import CardSlider from '../components/CardSlider'
import TVCard from '../components/TVCard'

const Home = () => {
  const [airingTodayTV, setAiringTodayTV] = useState([])
  const [onTheAirTV, setOnTheAirTV] = useState([])
  const [popularTV, setPopularTV] = useState([])
  const [topRatedTV, setTopRatedTV] = useState([])
  const [seriesGenres, setSeriesGenres] = useState([])

  useEffect(() => {
    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const airingTodayCall = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=${APIKEY}`
    const onTheAirCall = `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=${APIKEY}`
    const popularCall = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${APIKEY}`
    const topRatedCall = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${APIKEY}`
    const seriesGenresCall = `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${APIKEY}`

    fetch(airingTodayCall)
      .then(response => response.json())
      .then(data => setAiringTodayTV(data.results))
      .catch(err => console.error(err))

    fetch(onTheAirCall)
      .then(response => response.json())
      .then(data => setOnTheAirTV(data.results))
      .catch(err => console.error(err))

    fetch(popularCall)
      .then(response => response.json())
      .then(data => setPopularTV(data.results))
      .catch(err => console.error(err))

    fetch(topRatedCall)
      .then(response => response.json())
      .then(data => setTopRatedTV(data.results))
      .catch(err => console.error(err))

    fetch(seriesGenresCall)
      .then(response => response.json())
      .then(data => setSeriesGenres(data.genres))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div className='container-fluid justify-content-center mt-3'>
        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-tv fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Airing today</p>
        </div>
        <CardSlider
          mediaList={airingTodayTV}
          genres={seriesGenres}
          CardType={TVCard}
        />
      </div>

      <div className='container-fluid justify-content-center mt-3'>
        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-tv fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>On the air</p>
        </div>
        <CardSlider
          mediaList={onTheAirTV}
          genres={seriesGenres}
          CardType={TVCard}
        />
      </div>

      <div className='container-fluid justify-content-center mt-3'>
        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-tv fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Popular</p>
        </div>
        <CardSlider
          mediaList={popularTV}
          genres={seriesGenres}
          CardType={TVCard}
        />
      </div>

      <div className='container-fluid justify-content-center mt-3'>
        <div className='row justify-content-center align-middle m-1'>
          <i className='bi bi-tv fs-4 col-auto' />
          <p className='mb-0 ms-2 col-auto fs-4'>Top rated</p>
        </div>
        <CardSlider
          mediaList={topRatedTV}
          genres={seriesGenres}
          CardType={TVCard}
        />
      </div>
    </div>
  )
}

export default Home
