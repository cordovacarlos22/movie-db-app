import React, { useEffect, useState } from 'react';
import { fetchData } from '../db';
import MovieCard from './MovieCard';
const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        await fetchData('now_playing', currentPage);
        let response = localStorage.getItem('now_playing');
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
      setLoading(false);
    };
    getMovies();
  }, [currentPage]);

  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center text-red-500">{error}</div>;
  }

  const handleNextPage= () => {
    setCurrentPage( currentPage +1)
    
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
      <h1 className='flex justify-center items-center '>Now Playing</h1>
      <div className=' flex flex-wrap gap-2 m-1 p-2'>
        {movies && movies
          .map((movie, index) => (
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
              >
              </MovieCard>
            </>
          ))}
        
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          disabled={currentPage === 1} // Disable button if on the first page
        >
          Prev Page
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next Page
        </button>
      </div>
    </>
  )
}

export default NowPlaying