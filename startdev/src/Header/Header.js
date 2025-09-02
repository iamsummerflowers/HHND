import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, sectionId) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMobileMenuOpen(false);
      }
  };

  return (
      <nav className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                  <div className="flex items-center">
                      {/* <div className="w-10 h-10 bg-red rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">H</span>
                      </div> */}
                      <span className="text-xl font-bold text-white">Helping H.N.D Marketing</span>
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <HashLink to="#home" smooth className="text-white hover:text-yellow-600 transition-colors">Home</HashLink>
                    <HashLink to="#services" smooth className="text-white hover:text-yellow-600 transition-colors">Services</HashLink>
                    <HashLink to="#faq" smooth className="text-white hover:text-yellow-600 transition-colors">FAQ</HashLink>
                    <HashLink to="#contact" smooth className="text-white hover:text-yellow-600 transition-colors">Contact</HashLink>
                      {/* <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-white hover:text-yellow">Home</a> */}
                      {/* <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-white hover:text-dark-yellow transition-colors">Services</a> */}
                      {/* <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="text-white hover:text-dark-yellow transition-colors">FAQ</a> */}
                      {/* <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-white hover:text-dark-yellow transition-colors">Contact</a> */}
                  </div>
                  <button 
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="md:hidden text-white"
                  >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                  </button>
              </div>
              {mobileMenuOpen && (
                  <div className="md:hidden pb-4">
                      <HashLink to="#home" smooth className="block py-2 text-white hover:text-yellow-600 transition-colors">Home</HashLink>
                      <HashLink to="#services" smooth className="block py-2 text-white hover:text-yellow-600 transition-colors">Services</HashLink>
                      <HashLink to="#faq" smooth className="block py-2 text-white hover:text-yellow-600 transition-colors">FAQ</HashLink>
                      <HashLink to="#contact" smooth className="block py-2 text-white hover:text-yellow-600 transition-colors">Contact</HashLink>
                  </div>
              )}
          </div>
      </nav>
);
}

export default Header;