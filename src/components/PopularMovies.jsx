import React from 'react'
import MoviesComponent from './MoviesComponent'

const PopularMovies = () => {
  return (
    <>

      <MoviesComponent
        movieCategory="popular"
        componentTitle="popular movies"
      />
    </>
  )
}

export default PopularMovies