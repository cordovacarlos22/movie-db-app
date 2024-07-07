
import startIcon from '../assets/star-svg.svg'
const MovieCard = ({ id, movieUrl, rating, movieTitle, children }) => {
  return (
    <div className=' flex-1  flex  flex-wrap justify-center items-center border-2 border-red-200'>
      <section className='flex flex-col justify-center items-center text-center w-[178px] h-[400px]  m-2 ' id={id}>
        <img className=' w-full' src={`${movieUrl}`} alt={` ${movieTitle}  poster image`} />
        <div className='bg-black w-full h-full text-white'>
          <p className='flex w-full p-2   justify-start items-center text-sm '>
            <img className='h-4 w-4' src={startIcon} alt='star icon' />
            <span>{`${rating}`}</span>
          </p>
          <h2 className='truncate'>{`${id}. ${movieTitle}`}</h2>
          {/* <p className=''>{movie.overview}</p> */}
        </div>
      </section>
    </div>
  )
}

export default MovieCard