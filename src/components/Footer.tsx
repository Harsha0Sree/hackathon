
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-verdex-accent mb-4">Verdex</h3>
            <p className="text-gray-300">
              Bringing transparency to AI's environmental impact.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-verdex-accent transition-colors">Home</Link></li>
              <li><Link to="/analyze" className="text-gray-300 hover:text-verdex-accent transition-colors">Analyze Task</Link></li>
              <li><Link to="/models" className="text-gray-300 hover:text-verdex-accent transition-colors">Explore AI Models</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link to="/learn/impact" className="text-gray-300 hover:text-verdex-accent transition-colors">AI's Environmental Impact</Link></li>
              <li><Link to="/learn/methodology" className="text-gray-300 hover:text-verdex-accent transition-colors">Our Methodology</Link></li>
              <li><Link to="/learn/practices" className="text-gray-300 hover:text-verdex-accent transition-colors">Sustainable Practices</Link></li>
              <li><Link to="/learn/glossary" className="text-gray-300 hover:text-verdex-accent transition-colors">Glossary</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-verdex-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>
        
<<<<<<< HEAD
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Verdex. All rights reserved.</p>
        </div>
=======
        
>>>>>>> temp
      </div>
    </footer>
  );
};

export default Footer;
