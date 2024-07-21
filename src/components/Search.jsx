import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import LoadingSkeleton from './LoadingSkeleton';
import MovieCard from './MovieCard';
const Search = () => {
  const [searchMovie, setSearchMovie] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();

  const filteredMovies = searchMovie.filter(
    movie => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
  );

  if (error) {
    return <div className="flex justify-center items-center text-red-500">{error}</div>;
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)

  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const roundRating = (rating) => {
    Number(rating)
    return Math.round(rating * 10) / 10;
  };




  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    const searchMovieValue = async (searchValue) => {
      const apiReadAccessToken = import.meta.env.VITE_APIREADACCESSTOKEN;
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
      //?Create the fetch request options
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer  ${apiReadAccessToken}`
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.results);
      setSearchMovie(data.results);
      //? Simulate delay to show loading skeleton for a second
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
    searchMovieValue(id);

  }, [id,currentPage])

  return (
    <>

      {loading ? (
        <>
          <section className='flex  flex-wrap gap-4 mx-2 justify-center items-center'>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />

          </section>
        </>
      ) : (
        <>
          <header className='w-full flex flex-col justify-center items-center  h-48 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                  Local Search
              </label >
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Local Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

              </div>
            </form >
          </header >


          <h1 className='flex justify-center items-center '>Search Result</h1>
          
          <div className=' flex flex-wrap justify-center items-center gap-8 m-2 p-4'>
            {filteredMovies.length ? (
              filteredMovies.map((movie, index) => (
                <>
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    index={index + 1}
                    movieUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    rating={roundRating(movie.vote_average)}
                    releaseDate={movie.release_date}
                    movieTitle={movie.title}
                    section="Now Playing"
                    overview={movie.overview}
                  >
                  </MovieCard>
                </>
              ))
            ) : (

              <>
                <section className='flex flex-col justify-center items-center'>
                      <h1 className='font-bold text-red-600'>No Matching results were found  for  : 
                        <span
                        className='font-bold text-2xl'
                        >
                         {` ${id}`}
                      </span></h1>
                  <span>Please try again!</span>
                </section>
              </>
            )

            }

          </div>
          <div className="flex  justify-center items-center m-4">
              <Link
                className='bg-blue-500 hover:bg-blue-400 p-4 rounded'
                to='/'>
              Go Back Home
              </Link>
          </div>
        </>
      )}
    </>
  )
}

export default Search