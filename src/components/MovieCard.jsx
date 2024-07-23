/* The code you provided is a React component called `MovieCard`. This component is responsible for
rendering a card displaying information about a movie. Here's a breakdown of what the code is doing: */

import { Link } from 'react-router-dom';
import startIcon from '../assets/star-svg.svg'
const MovieCard = ({ id, index, movieUrl, rating, movieTitle, releaseDate, overview }) => {



  return (
    <div className='   flex  flex-wrap justify-center items-center  relative '>
      <Link to={`/title/${id}`}>
        <section className='flex flex-col justify-center items-center text-center w-[225px] relative    ' id={id}>
          <img className=' w-full rounded-t' src={`${movieUrl}`} alt={` ${movieTitle}  poster image`} />
          <div className='bg-gray-800 w-full h-full text-white rounded-b'>
            <p className='flex w-full p-2   justify-start items-center text-sm '>
              <img className='h-6 w-6' src={startIcon} alt='star icon' />
              Rating:
              <span className='flex w-full p-2   justify-start items-center text-s'>{`${rating}`}</span>
            </p>
            <h2 className='truncate flex flex-wrap p-2'>{`${index}. ${movieTitle}`}</h2>
            <span> {new Date(`${releaseDate}`).toLocaleDateString()}</span>

          </div>
        </section>
        {/* <section className='absolute top-0 left-0 w-full  h-full bg-blue-500 text-white p-2 rounded opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-center '>
          <h2 className='text-ellipsis font-bold p-2'>{index}. {movieTitle}</h2>
          <p className='flex items-center text-sm'>
            <img className='h-6 w-6' src={startIcon} alt='star icon' />
            Rating:
            <span className='ml-1'>{rating}</span>
          </p>
          <p className='text-sm text-wrap overflow-scroll ' >{overview}</p>
        </section> */}
      </Link>
    </div>
  )
}

export default MovieCard