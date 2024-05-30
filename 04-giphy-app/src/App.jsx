import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'
import SearchBar from './components/SearchBar'

function App () {
  const [gifs, setGifs] = useState([])
  const APIKEY = import.meta.env.VITE_GIPHY_KEY
  const sendSearch = (search) => {
    console.log(search)
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${search}&limit=40&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )
      .then(res => res.json())
      .then(results => {
        console.log(results)
        const { data } = results
        setGifs(data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    // Las llamadas a API ocurren normalmente en useEffect
    // Los corchetes son para realizar la preticion solo en el first render
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=40&offset=0&rating=g&bundle=messaging_non_clips`
    )
      .then(res => res.json())
      .then(results => {
        const { data } = results
        setGifs(data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div>
        <h1 className='Title'>Giphy App</h1>
        <SearchBar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {gifs.map(gif => (
            <ImageCard
              key={gif.index}
              url={gif.images.fixed_height.url}
              title={gif.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
