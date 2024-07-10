import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NowPlayingMovies from './components/NowPlayingMovies';
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import UpComingMovies from './components/UpComingMovies';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/now-playing" element={<NowPlayingMovies />} />
        <Route exact path="/popular" element={<PopularMovies />} />
        <Route exact path="/top-rated" element={<TopRatedMovies />} />
        <Route exact path="/upcoming" element={<UpComingMovies />} />
      </Routes>
    </Router>
  )

}

export default App