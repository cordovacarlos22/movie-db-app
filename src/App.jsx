import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home';
import NowPlaying from './components/NowPlaying';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/now-playing" element={<NowPlaying />} />
      </Routes>
    </Router>
  )

}

export default App