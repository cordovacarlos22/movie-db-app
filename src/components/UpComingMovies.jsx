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