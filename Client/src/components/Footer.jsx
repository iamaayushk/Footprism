import React from 'react';
import { Facebook, Linkedin, Instagram, Leaf, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white pt-20 pb-10 overflow-hidden font-['Poppins']">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-950/20 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6 lg:pr-8">
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-emerald-500 rounded-xl group-hover:rotate-12 transition-transform duration-500">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black tracking-tighter">FootPrism</h2>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              Empowering individuals to measure, understand, and minimize their carbon impact for a sustainable future.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter className="w-4 h-4" />, color: 'hover:bg-blue-400' },
                { icon: <Linkedin className="w-4 h-4" />, color: 'hover:bg-blue-600' },
                { icon: <Instagram className="w-4 h-4" />, color: 'hover:bg-pink-500' },
                { icon: <Github className="w-4 h-4" />, color: 'hover:bg-gray-700' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:pl-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', link: '#home' },
                { name: 'About Platform', link: '#about' },
                { name: 'Our Mission', link: '#mission' },
                { name: 'Sustainability Guide', link: '#carbon' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500">Stay Updated</h3>
            <p className="text-gray-400 text-sm font-medium">Get the latest sustainability tips and platform updates.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-4 pr-12 text-sm focus:outline-none focus:border-emerald-500 transition-all font-medium"
              />
              <button className="absolute right-2 top-2 p-2 bg-emerald-500 rounded-xl hover:bg-emerald-400 transition-colors">
                <ArrowRightAlt className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © {currentYear} FootPrism. Built with ❤️ for the Planet.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <Mail className="w-4 h-4 text-emerald-500" />
            <span>hello@footprism.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simple Arrow Component since I use ArrowRight locally or can import
const ArrowRightAlt = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default Footer;