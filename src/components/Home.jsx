/**
 * The Home component renders the NowPlayingMovies component within a div with specific styling
 * classes.
 * @returns The `Home` component is being returned, which contains a `div` element with class name
 * 'flex flex-col' and the `NowPlayingMovies` component.
 */
import React from 'react'
import NowPlayingMovies from './NowPlayingMovies'


const Home = () => {


  return (

    <div className=' flex  flex-col '>
      <NowPlayingMovies />

    </div>

  )
}

export default Home