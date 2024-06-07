import { useState, useEffect } from 'react'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const call = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${APIKEY}`
    // console.log(APIKEY)
    // fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${APIKEY}`)
    fetch(call)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Hello</h1>
      {movies.map(movie => (<h2 key={movie.id}>{movie.title}</h2>))}
    </div>
  )
}

export default Home
