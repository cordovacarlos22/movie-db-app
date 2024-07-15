import React, { useEffect, useState } from 'react';
import { fetchData } from '../db';
import MovieCard from './MovieCard';
import LoadingSkeleton from './LoadingSkeleton';

const MoviesComponent = ({ movieCategory, componentTitle }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(
    movie => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
  );

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        await fetchData(`${movieCategory}`, currentPage);
        let response = sessionStorage.getItem(`${movieCategory}`);
        let data = JSON.parse(response);
        if (data[0].results) {
          setMovies(data[0].results);
        } else {
          setMovies([]);
          alert("No movies in the database")
        }

      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
      }
      setTimeout(() => { 
        setLoading(false)
      },1000);
    };
    getMovies();
  }, [currentPage]);



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
                Search
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
                  placeholder="Search for a movie"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

              </div>
            </form >
          </header >


            <h1 className='flex justify-center items-center '>{componentTitle}</h1>
            <div className="flex justify-center items-center m-4">
              <button
                onClick={handlePrevPage}
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-400"
                disabled={currentPage === 1} // Disable button if on the first page
              >
                {`<`} Prev Page
              </button>
              <h4 className='m-2 bg-yellow-400 p-2 rounded font-bold'>page :  {currentPage} </h4>
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-blue-500 text-white  hover:bg-blue-400"
              >
                Next Page {`>`}
              </button>
            </div>
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
                      <h1 className='font-bold text-red-600'>No Matching results were found </h1>
                      <span>Please try again!</span>
                    </section>
                  </>
            )

            }

          </div>
          <div className="flex justify-center items-center m-4">
            <button
              onClick={handlePrevPage}
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-400"
              disabled={currentPage === 1} // Disable button if on the first page
            >
              {`<`} Prev Page
            </button>
            <h4 className='m-2 bg-yellow-400 p-2 rounded font-bold'>page :  {currentPage} </h4>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-blue-500 text-white  hover:bg-blue-400"
            >
              Next Page {`>`}
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default MoviesComponent