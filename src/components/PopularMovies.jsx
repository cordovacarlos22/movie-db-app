/**
 * The PopularMovies component renders the MoviesComponent with the movieCategory set to "popular" and
 * the componentTitle set to "popular movies".
 */
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