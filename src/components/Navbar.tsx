import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shieldLogo from "../assets/pngs/shieldLogo.png";
import { navLinks } from '../constants';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <nav className="bg-gray-100 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 lg:ml-10 md:ml-5 sm:ml-3   flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              <img src={shieldLogo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden gap-10 mr-20 text-xl md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-gray-700 hover:text-yellow-700">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 " id="mobile-menu">
          <div className="px-4 pt-4 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
