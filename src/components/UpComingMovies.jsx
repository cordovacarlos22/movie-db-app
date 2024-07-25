/**
 * The UpComingMovies component renders the MoviesComponent with the movieCategory set to "upcoming"
 * and the componentTitle set to "upcoming Movies".
 */
import React from 'react'
import MoviesComponent from './MoviesComponent'

const UpComingMovies = () => {
  return (
    <>
      <MoviesComponent
        movieCategory="upcoming"
        componentTitle="upcoming Movies"
      />
    </>
  )
}

export default UpComingMovies