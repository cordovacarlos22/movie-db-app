/* This code snippet is a React component called `MovieDetails`. It is responsible for fetching and
displaying details of a specific movie using data from an external API (in this case, The Movie
Database API). Here's a breakdown of what the code does: */
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import LoadingSkeleton from './LoadingSkeleton';
import MovieDetailsLoadingSkeleton from './MovieDetailsLoadingSkeleton';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiReadAccessToken = import.meta.env.VITE_APIREADACCESSTOKEN

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const getMovieDetails = async (movieId) => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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
      console.log(data);
      setMovie(data);
      //? Simulate delay to show loading skeleton for a second
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
    getMovieDetails(id);

  }, [id])

  const convertMinutesToHours = (min) => {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}h  ${minutes}`;
  }

  return (
    <>
      {loading ? (
        <>
          <MovieDetailsLoadingSkeleton />
        </>
      ) : (

        <>
          {movie ? (
            <>
              {movie && (
                <div
                  key={movie.id}
                  className='w-screen flex justify-center items-center text-black '>
                  <section className='m-4 flex  flex-col  items-center justify-center p-2  w-3/4 bg-yellow-400 rounded '>
                    <Link
                      to={movie.homepage}
                      className='rounded w-1/2'
                    >
                      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                    </Link>
                    <article className='flex flex-col justify-center items-center p-2  w-1/2'>
                      <span className='font-bold  underline'>
                        {
                          movie.tagline
                        }
                      </span>
                      <Link
                        to={movie.homepage}
                      >
                        <h1 className='text-2xl font-extrabold hover:text-blue-500 my-4'>{movie.original_title}</h1>
                      </Link>
                      <p className="font-bold">Run time:</p>
                      <span>
                        {
                          convertMinutesToHours(movie.runtime)
                        }
                        minutes
                      </span>
                      <span className='font-bold text-xl'>Overview:</span>
                      <p className='leading-relaxed tracking-wide'>{movie.overview}</p>
                      <p className='font-bold'>Release Date:</p>
                      <span>
                        {new Date(movie.release_date).toLocaleDateString()}
                      </span>
                      <p className='font-bold'>Popularity:</p>
                      <span>
                        {movie.popularity}
                      </span>
                      <p className='font-bold'>Vote Average:</p>
                      <span>
                        {movie.vote_average}
                      </span>

                      <p className='font-bold'>Genres:</p>
                      <span> {movie.genres.map(genre => genre.name).join(', ')}</span>
                      <p className='font-bold'>Production Companies: </p>
                      <section className='flex flex-wrap flex-row justify-evenly flex-1'>
                        {movie.production_companies.map(company => ((
                          <aside className='flex flex-row  flex-wrap   m-4 items-center '>
                            <img width={100} src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} alt={company.name} />
                            {/* <span className='font-extrabold'>{company.name}</span> */}
                          </aside>
                        )))}
                      </section>
                      <p className='font-bold'>Production Countries:</p>
                      <span> {movie.production_countries.map(country => country.name).join(', ')}</span>
                      <p className='font-bold'>Status:</p>
                      <span>
                        {movie.status}
                      </span>



                      <button className='px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded m-2'>
                        <Link to={"/"}>
                          back to movies
                        </Link>
                      </button>

                    </article>
                  </section>
                </div>
              )}
            </>
          ) : (

            <>
              <h1>Movie Not Found</h1>
            </>
          )}
        </>
      )}
    </>
  )
}

export default MovieDetails