import React, { useState } from 'react';
import { navLinks } from '../navLinks';
import hamburgerMenu from '../assets/menu.svg';
import closeMenu from '../assets/close.svg'; // Assuming you have a close icon
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative bg-black text-sm text-white flex justify-between items-center p-4">
      {/* Logo */}
      <section className="bg-yellow-400 text-black rounded-sm px-3 py-1">
        <p className="font-bold">IMdb</p>
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
      <section className="md:hidden">
        <button
          className="flex items-center space-x-2"
          onClick={toggleMenu}
        >
          <img className="w-6" src={menuOpen ? closeMenu : hamburgerMenu} alt="menu icon" />
          <p>{menuOpen ? 'Close' : 'Menu'}</p>
        </button>
      </section>

      {/* Mobile Menu Links */}
      <ul className={`absolute top-full left-0 w-full bg-white text-black shadow-md md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
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
      <section className="hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md bg-gray-700 text-white"
        />
      </section>
    </nav>
  );
};

export default Nav;