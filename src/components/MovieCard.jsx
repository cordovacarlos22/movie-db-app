
import startIcon from '../assets/star-svg.svg'
const MovieCard = ({ id, index, movieUrl, rating, movieTitle, releaseDate }) => {
  return (
    <div className=' flex-1  flex  flex-wrap justify-center items-center   '>
      <section className='flex flex-col justify-center items-center text-center w-[225px]    ' id={id}>
        <img className=' w-full rounded-t' src={`${movieUrl}`} alt={` ${movieTitle}  poster image`} />
        <div className='bg-black w-full h-full text-white rounded-b'>
          <p className='flex w-full p-2   justify-start items-center text-sm '>
            <img className='h-6 w-6' src={startIcon} alt='star icon' />
            Rating:
            <span className='flex w-full p-2   justify-start items-center text-s'>{`${rating}`}</span>
          </p>
          <span>release: {`${releaseDate}` }</span>
          <h2 className='truncate p-2'>{`${index}. ${movieTitle}`}</h2>
          {/* <p className=''>{movie.overview}</p> */}
        </div>
      </section>
    </div>
  )
}

export default MovieCard