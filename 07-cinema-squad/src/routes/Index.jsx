import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Movies from '../pages/Movies.jsx'
import Series from '../pages/Series.jsx'
import MovieDetails from '../pages/MovieDetails.jsx'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/series' element={<Series />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      {/* <Route path='/tv/:id' element={<TVDetail />} /> */}
      {/* <Route path='/person/:id' element={<PersonDetail />} /> */}
    </Routes>
  )
}

export default RoutesIndex
