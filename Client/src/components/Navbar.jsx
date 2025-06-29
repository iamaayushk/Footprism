import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" bg-white/90 backdrop-blur-md shadow-lg border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href='#' className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              FootPrism
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href='/'
              className="relative text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href='#about'
              className="relative text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href='#mission'
              className="relative text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 group"
            >
              Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Login Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href='/login'
              className="hidden sm:flex bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Login
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-green-100`}>
        <div className="px-4 py-4 space-y-4">
          <a
            href='#'
            className="block text-gray-700 hover:text-green-600 font-medium py-2 px-3 rounded-lg hover:bg-green-50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href='#about'
            className="block text-gray-700 hover:text-green-600 font-medium py-2 px-3 rounded-lg hover:bg-green-50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href='#mission'
            className="block text-gray-700 hover:text-green-600 font-medium py-2 px-3 rounded-lg hover:bg-green-50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mission
          </a>
          <a
            href='/login'
            className="block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full font-medium text-center hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;