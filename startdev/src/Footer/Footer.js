import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Footer() {

    const currentYear = new Date().getFullYear();


    return (
      <footer className="bg-black border-t border-red-800/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-1">
                      <div className="flex items-center mb-4">
                          {/* <div className="w-10 h-10 bg-gradient-to-r from-deep-red to-dark-yellow rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-lg">H</span>
                          </div> */}
                          <span className="text-xl font-bold text-white">Helping H.N.D Marketing</span>
                      </div>
                      <p className="text-gray-400 mb-4">Empowering businesses with comprehensive marketing solutions tailored to drive growth and success.</p>
                  </div>
                  <div>
                      <h4 className="text-lg font-semibold text-white mb-4 w-fit">Quick Links</h4>
                      <ul className="space-y-2">
                          <li><HashLink to="#home" smooth className="w-fit text-gray-400 hover:text-yellow-800 transition-colors">Home</HashLink></li>
                          <li><HashLink to="#services" smooth className="w-fit text-gray-400 hover:text-yellow-800 transition-colors">Services</HashLink></li>
                          <li><HashLink to="#faq" smooth className="w-fit text-gray-400 hover:text-yellow-800 transition-colors">FAQ</HashLink></li>
                          <li><HashLink to="#contact" smooth className="w-fit text-gray-400 hover:text-yellow-800 transition-colors">Contact</HashLink></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-lg font-semibold text-white mb-4 w-fit">Services</h4>
                      <ul className="space-y-2">
                          <li><span className="w-fit text-gray-400">Strategic Marketing</span></li>
                          <li><span className="w-fit text-gray-400">Digital Marketing</span></li>
                          <li><span className="w-fit text-gray-400">Brand Development</span></li>
                          <li><span className="w-fit text-gray-400">SEO & CRO</span></li>
                      </ul>
                  </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                  <p className="text-gray-400">&copy; {currentYear} Beyond Sight Solutions. All rights reserved.</p>
              </div>
          </div>
      </footer>
      
    );
  }
  
  export default Footer;