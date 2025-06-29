import React from 'react';
import { Facebook, Linkedin, Instagram, Leaf, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-300" />
            <div>
              <h2 className="text-2xl font-bold">FootPrism</h2>
              <p className="text-green-200 text-sm">Track • Reduce • Thrive</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            {['Home', 'About', 'Mission', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-green-200 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-red-600 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors duration-300">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-600 mt-6 pt-4 text-center">
          <p className="text-green-200 text-sm">
            Made with <span className="text-red-400">❤️</span> by Aayush • © 2025 FootPrism
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;