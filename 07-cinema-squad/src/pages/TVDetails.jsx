import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TVHeader from '../components/TVHeader'
import MediaSection from '../components/MediaSection'
import CastSection from '../components/CastSection'
import Providers from '../components/Providers'
import TVCard from '../components/TVCard'
import RecommendationSection from '../components/RecommendationSection'

const TVDetails = () => {
  const { id } = useParams()
  const [tvInfo, setTvInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const language = 'en-US'

  const fetchData = url => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .catch(error => {
        console.error(error)
        setError(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    setError(null)

    const APIKEY = import.meta.env.VITE_MOVIEDB_API_KEY
    const data = {}

    const endPointNames = [
      'details',
      'credits',
      'videos',
      'images',
      'providers',
      'recommendations',
      'genres',
      'similar'
    ]

    const apiCalls = [
      `https://api.themoviedb.org/3/tv/${id}?language=${language}&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/tv/${id}/credits?language=${language}&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${APIKEY}`,
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1&api_key=${APIKEY}`
    ]

    Promise.all(apiCalls.map(endpoint => fetchData(endpoint)))
      .then(results => {
        results.forEach((result, index) => {
          data[endPointNames[index]] = result
        })
        setLoading(false)
        setTvInfo(data)
      })
      .catch(error => {
        console.error('One or more API calls failed:', error)
      })
  }, [id])

  const addProviders = () => {
    if (tvInfo.providers.results.US !== undefined) {
      return <Providers data={tvInfo.providers.results.US} />
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading Movie data: {error.message}</div>
  }
  return (
    <div className='bg-ultra-dark'>
      <TVHeader
        data={tvInfo.details}
        credits={tvInfo.credits}
        id='header'
      />
      {addProviders()}
      <MediaSection
        videos={tvInfo.videos.results}
        images={tvInfo.images}
        id='media'
      />
      <CastSection credits={tvInfo.credits} />
      <RecommendationSection movieInfo={tvInfo} Card={TVCard} />
    </div>
  )
}

export default TVDetails
