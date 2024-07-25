/**
 * The `Nav` component in this React code handles navigation, menu toggling, displaying links, and a
 * search bar for searching movies from an API.
 * @returns The `Nav` component is being returned, which consists of a navigation bar with a logo,
 * desktop menu, mobile menu button, mobile menu links, and a search bar. The component also includes
 * functionality to toggle the mobile menu, fetch movie data from an API, and perform a search based on
 * the user input in the search bar.
 */
import React, { useEffect, useState } from 'react';
import { navLinks } from '../navLinks';
import hamburgerMenu from '../assets/menu.svg';
import closeMenu from '../assets/close.svg'; // Assuming you have a close icon
import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const searchMovie = () => {
    const apiReadAccessToken = import.meta.env.VITE_APIREADACCESSTOKEN;
    const url = 'https://api.themoviedb.org/3/search/movie?query=garfield&include_adult=false&language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiReadAccessToken}`
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  }

  searchMovie();

  return (
    <>
      <nav className="relative bg-black text-sm text-white flex flex-wrap justify-between items-center p-4">
        {/* Logo */}
        <section className="bg-yellow-400 text-black rounded-sm px-3 py-1">
          <NavLink to="/">
            <p className="font-bold">TMHdb</p>
          </NavLink>
        </section>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-500'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <section className="md:hidden mx-4">
          <button
            className="flex items-center space-x-2"
            onClick={toggleMenu}
          >
            <img className="w-6" src={menuOpen ? closeMenu : hamburgerMenu} alt="menu icon" />
            <p>{menuOpen ? 'Close' : 'Menu'}</p>
          </button>
        </section>

        {/* Mobile Menu Links */}
        <ul className={`absolute z-30 p-4  top-full left-0 w-full bg-white text-black shadow-md md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          {navLinks.map(link => (
            <li key={link.path} className="border-b">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-800'
                }
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <form className=" m-auto md:m-2 md:block ">
          <input
            type="text"
            placeholder="Search Movie from API "
            className="p-2 rounded-l-md bg-gray-700 text-white"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            className='p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-400'
            type='submit'

          >
            <NavLink
              to={`/search/:${searchTerm}`}
            >
              Search
            </NavLink>
          </button>
        </form>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;