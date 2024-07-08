import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home';
import NowPlaying from './components/NowPlaying';
import Popular from './components/Popular';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/now-playing" element={<NowPlaying />} />
        <Route exact path="/popular" element={<Popular />} />
      </Routes>
    </Router>
  )

}

export default App