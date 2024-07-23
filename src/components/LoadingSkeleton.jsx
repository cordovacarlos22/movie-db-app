/* This code snippet is a React functional component called `LoadingSkeleton`. It is used to display a
loading skeleton UI while content is being fetched or loaded. The component structure includes
nested `div` elements with specific classNames for styling using Tailwind CSS classes. The
classNames define the layout, colors, and animations for the loading skeleton. */
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className='flex flex-wrap justify-center items-center relative w-[225px]  m-2'>
      <section className='flex flex-col justify-center items-center text-center w-full relative'>
        <div className='w-full h-56 bg-gray-300 rounded-t animate-pulse'></div>
        <div className='bg-gray-800 w-full h-32 text-white rounded-b animate-pulse  p-2'>
          <div className=" flex flex-col gap-2">
            <div className='ml-2 h-4 bg-gray-400 rounded w-3/4 animate-pulse'></div>
            <div className='ml-2 h-4 bg-gray-400 rounded w-3/4 animate-pulse'></div>
            <div className='ml-2 h-4 bg-gray-400 rounded w-3/4 animate-pulse'></div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;