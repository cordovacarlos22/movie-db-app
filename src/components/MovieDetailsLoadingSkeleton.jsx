/* This code snippet is defining a React functional component called `MovieDetailsLoadingSkeleton`.
This component is used to display a loading skeleton UI while data is being fetched or processed.
The loading skeleton provides a visual indication to the user that content is loading. */
import React from 'react'

const MovieDetailsLoadingSkeleton = () => {
  return (
    <div className="w-screen flex justify-center items-center text-black">
      <section className="m-4 flex flex-col items-center justify-center p-2 w-3/4 bg-gray-300 rounded animate-pulse">
        <div className="rounded w-1/2 h-64 bg-gray-400"></div>
        <article className="flex flex-col justify-center items-center p-2 w-1/2">
          <div className="h-6 bg-gray-400 rounded w-3/4 my-2"></div>
          <div className="h-8 bg-gray-400 rounded w-full my-4"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2 my-2"></div>
          <div className="h-4 bg-gray-400 rounded w-full my-2"></div>
          <div className="h-4 bg-gray-400 rounded w-full my-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2 my-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/4 my-2"></div>
          <div className="h-6 bg-gray-400 rounded w-3/4 my-2"></div>
          <div className="h-4 bg-gray-400 rounded w-full my-2"></div>
        </article>
      </section>
    </div>
  );
}

export default MovieDetailsLoadingSkeleton