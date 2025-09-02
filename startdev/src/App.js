import React from 'react';
import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import Hero from './Main/Hero.js';
import Services from './Main/Services.js';
import FAQ from './Main/FAQ.js';
import Contact from './Footer/Contact.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
