import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import shieldLogo from '../../assets/pngs/shieldLogo.png';
import { navLinks } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={shieldLogo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-gray-700 hover:text-yellow-500 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-yellow-500 transition-colors duration-200 ${
                      isActive ? 'text-yellow-500' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300" id="mobile-menu">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="block text-gray-700 hover:bg-gray-100 hover:text-yellow-500 rounded-md px-4 py-2 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-gray-700 hover:bg-gray-100 hover:text-yellow-500 rounded-md px-4 py-2 transition-colors duration-200 ${
                      isActive ? 'bg-gray-100 text-yellow-500' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
