import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const APIKEY = import.meta.env.VITE_GIPHY_KEY
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
      }).catch(err => console.log(err))
  }, [])
  return (
    <>
      <div>
        <h1 className='Title'>Giphy App</h1>
        
      </div>
    </>
  )
}

export default App
