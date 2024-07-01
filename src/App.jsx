import React from 'react'
import { fetchData } from './db';
const App = () => {
  React.useEffect(() => {
    fetchData()
  }, []) // Fetch data only once when App component mounts

  let response = localStorage.getItem('movies');
  let data = JSON.parse(response);
  let movies = data[0].results
  let moviesImages = `https://image.tmdb.org/${movies.backdrop_path
    }`

  console.log(data[0].results); // Log the fetched data to the console
  // Fetch data and display it
  return (
    <>
      {movies && movies.map((movie) => (
        <div className='' key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={` ${movie.title}  poster image`} />
          <p>{movie.description}</p>
        </div>
      ))}
    </>
  )

}

export default App