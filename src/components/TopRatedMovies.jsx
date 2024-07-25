/**
 * The TopRatedMovies component renders the MoviesComponent with the movieCategory set to "top_rated"
 * and the componentTitle as "top rated movies".
 */
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