import React from 'react'
import { fetchData } from '../db';
import MovieCard from './MovieCard';
const NowPlaying = () => {

  React.useEffect(() => {
    fetchData("now_playing", 1)
  }, []) // Fetch data only once when App component mounts

  let response = localStorage.getItem('movies');
  let data = JSON.parse(response);
  let movies = data[0].results

  return (
    <>
      <h1 className='flex justify-center items-center '>Now Playing</h1>
      <div className=' flex flex-wrap gap-2 m-2 p-2'>
        
        {movies && movies.map((movie, index) => (
          <>
            <MovieCard
              key={movie.id}
              id={movie.id}
              movieUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              rating={movie.vote_average}
              movieTitle={movie.title}
              section="Now Playing"
            >
              <h1>now_playing</h1>
            </MovieCard>
          </>
        ))}
      </div>
    </>
  )
}

export default NowPlaying