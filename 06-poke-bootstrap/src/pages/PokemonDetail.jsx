import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
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
    return <div>Error loading Pokemon data: {error.message}</div>
  }

  return (
    <div>
      {pokemon && (
        <>
          <h1>Pokemon {pokemon.name}</h1>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}
    </div>
  )
}

export default PokemonDetail
