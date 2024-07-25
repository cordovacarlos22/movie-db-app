/**
 * The NowPlayingMovies component renders the MoviesComponent with the movieCategory set to
 * "now_playing" and the componentTitle set to "Now Playing".
 */
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