import React from 'react'
import MoviesComponent from './MoviesComponent'

const NowPlayingMovies = () => {
  return (
    <>
      <MoviesComponent
        movieCategory="now_playing"
        componentTitle="Now Playing"
      />
    </>
  )
}

export default NowPlayingMovies