
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Simulate login state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="glass-nav">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-verdex-accent font-bold text-xl">Verdex</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-verdex-accent transition-colors">Home</Link>
              <Link to="/analyze" className="text-white hover:text-verdex-accent transition-colors">Analyze Task</Link>
              <Link to="/models" className="text-white hover:text-verdex-accent transition-colors">Explore AI Models</Link>
              <Link to="/learn" className="text-white hover:text-verdex-accent transition-colors">Learn</Link>
              <Link to="/about" className="text-white hover:text-verdex-accent transition-colors">About</Link>
              {isLoggedIn && (
                <Link to="/account" className="text-white hover:text-verdex-accent transition-colors">Account</Link>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-verdex-accent focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="glass px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2">
              <Link to="/" className="text-white hover:text-verdex-accent block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/analyze" className="text-white hover:text-verdex-accent block px-3 py-2 rounded-md text-base font-medium">
                Analyze Task
              </Link>
              <Link to="/models" className="text-white hover:text-verdex-accent block px-3 py-2 rounded-md text-base font-medium">
                Explore AI Models
              </Link>
              <Link to="/learn" className="text-white hover:text-verdex-accent block px-3 py-2 rounded-md text-base font-medium">
                Learn
              </Link>
              <Link to="/about" className="text-white hover:text-verdex-accent block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              {isLoggedIn && (
                <Link to="/account" className="text-white hover:text-verdex-accent block px-3 py-2 rounded-md text-base font-medium">
                  Account
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
