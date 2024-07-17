import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home';
import NowPlayingMovies from './components/NowPlayingMovies';
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import UpComingMovies from './components/UpComingMovies';
import ErrorPage from './components/ErrorPage';
import MovieDetails from './components/MovieDetails';
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,
      errorElement: <ErrorPage />,
      children:
        [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/now-playing',
            element: <NowPlayingMovies />,
          },
          {
            path: '/popular',
            element: <PopularMovies />,
          },
          {
            path: '/top-rated',
            element: <TopRatedMovies />,
          },
          {
            path: '/upcoming',
            element: <UpComingMovies />,
          },
          {
            path: '/title/:id',
            element: <MovieDetails />,
          },
        ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )

}

export default App