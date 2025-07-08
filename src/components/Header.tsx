import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full py-6 px-8 flex items-center justify-between bg-black bg-opacity-80 backdrop-blur-md border-b border-neon-pink shadow-lg z-10 fixed top-0">
      <Link to="/" className="text-3xl font-extrabold text-neon-pink tracking-widest animate-pulse hover:text-neon-blue transition-colors">
        Mohd Kamil
      </Link>
      <nav className="space-x-6">
        <Link 
          to="/" 
          className={`transition-colors duration-300 font-bold hover:scale-110 transform ${
            isActive('/') ? 'text-neon-pink' : 'text-neon-blue hover:text-neon-pink'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`transition-colors duration-300 font-bold hover:scale-110 transform ${
            isActive('/about') ? 'text-neon-pink' : 'text-neon-blue hover:text-neon-pink'
          }`}
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className={`transition-colors duration-300 font-bold hover:scale-110 transform ${
            isActive('/projects') ? 'text-neon-pink' : 'text-neon-blue hover:text-neon-pink'
          }`}
        >
          Projects
        </Link>
        <Link 
          to="/skills" 
          className={`transition-colors duration-300 font-bold hover:scale-110 transform ${
            isActive('/skills') ? 'text-neon-pink' : 'text-neon-blue hover:text-neon-pink'
          }`}
        >
          Skills
        </Link>
        <Link 
          to="/contact" 
          className={`transition-colors duration-300 font-bold hover:scale-110 transform ${
            isActive('/contact') ? 'text-neon-pink' : 'text-neon-blue hover:text-neon-pink'
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header; 