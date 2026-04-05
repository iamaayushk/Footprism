import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowRight } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href='/' className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-green-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Foot<span className="text-green-600">Prism</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Mission'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="relative text-sm font-semibold text-gray-700 hover:text-green-600 uppercase tracking-widest transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Login Button & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            <a
              href='/login'
              className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-gray-200"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-3 rounded-2xl bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-[72px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="mx-4 mt-2 bg-white/40 backdrop-blur-3xl rounded-[32px] shadow-2xl border border-white/40 overflow-hidden p-8 space-y-6">
          {['Home', 'About', 'Mission'].map((item, idx) => (
            <a
              key={item}
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              className="group flex items-center justify-between text-2xl font-black text-gray-900 py-4 px-6 rounded-2xl hover:bg-white/30 transition-all duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="tracking-tight">{item}</span>
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
          <div className="pt-4 border-t border-white/20">
            <a
              href='/login'
              className="block w-full bg-gray-900 text-white px-6 py-5 rounded-2xl font-black text-xl text-center hover:bg-green-600 transition-all duration-300 shadow-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;