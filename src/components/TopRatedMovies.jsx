import React from 'react'
import MoviesComponent from './MoviesComponent'

const TopRatedMovies = () => {
  return (
    <>
      <MoviesComponent
        movieCategory="top_rated"
        componentTitle="top rated movies"
      />
    </>
  )
}

export default TopRatedMovies