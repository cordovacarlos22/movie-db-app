import React from 'react'
import { fetchData } from './db';
import start from './assets/star-svg.svg'
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
    <div className='flex justify-center items-center flex-wrap '>
      {movies && movies.map((movie, index) => (
        <div className='flex flex-col justify-center items-center text-center w-[178px] h-[400px]  m-4  ' key={movie.id}>

          <img className=' w-full' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={` ${movie.title}  poster image`} />
          <div className='bg-black w-full h-full text-white'>
            <p className='flex w-full p-2   justify-start items-center text-sm '>
              <img className='h-4 w-4' src={start} alt='star icon' />
              <span>{movie.vote_average}</span>
            </p>
            <h2 className='truncate'>{`${index + 1}. ${movie.title}`}</h2>
            {/* <p className=''>{movie.overview}</p> */}
          </div>
        </div>
      ))}
    </div>
  )

}

export default App