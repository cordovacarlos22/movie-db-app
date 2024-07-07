import React from 'react'
import { fetchData } from './db';
import start from './assets/star-svg.svg'
import MovieCard from './components/MovieCard';
const App = () => {
  React.useEffect(() => {
    fetchData()
  }, [fetchData()]) // Fetch data only once when App component mounts

  let response = localStorage.getItem('movies');
  let data = JSON.parse(response);
  let movies = data[0].results
  let moviesImages = `https://image.tmdb.org/${movies.backdrop_path
    }`

  console.log(data[0].results); // Log the fetched data to the console
  // Fetch data and display it
  return (
    <div className='flex justify-center items-center flex-wrap '>
      {movies && movies.map((movie, index) => (
        <>
          <MovieCard
            id={index + 1}
            movieUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            rating={movie.vote_average}
            movieTitle={movie.title}
          />
        </>
      ))}
    </div>
  )

}

export default App