import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pokemon, setPokemon] = useState([])
  const [mySearch, setMySearch] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => response.json())
      .then(data => setPokemon(data.results))
      .catch(err => console.error(err))
  }, [])

  const setSearch = search => {
    // const items = pokemon.filter(item => {
    //   return item.name.toLowerCase().includes(search.toLowerCase())
    // })
    // setPokemon(items)
    setMySearch(search.toLowerCase())
  }

  return (
    <>
      <div className='container'>
        <h1>Home</h1>
        <SearchBar handleSearch={setSearch} />
        <div className='row'>
          {pokemon
            .filter(item => {
              return item.name.toLowerCase().includes(mySearch)
            })
            .map((p, i) => (
              <div className='col-sm-3 mb-3 mb-sm-0' key={i}>
                <div className='card justify-content-center'>
                  <div className='card-body justify-content-center'>
                    <Link to={`/pokemon/${p.name}`}><h5 className='card-title'>{p.name}</h5></Link>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                        p.url.split('/')[6]
                      }.png`}
                      alt={p.name}
                      className='col-8'
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Home
