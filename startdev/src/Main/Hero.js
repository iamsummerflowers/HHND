import React from 'react';
import './Hero.css';
import logo from '../assets/HNDlogo.svg'


function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-black via-deep-red to-dark-yellow min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <img src={logo} />
                {/* <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-white/20">
                    <span className="text-4xl font-bold text-white">H</span>
                </div> */}
                {/* <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-light-green to-light-blue bg-clip-text text-transparent">
                    Helping H.N.D Marketing
                </h1> */}
                <p className="text-2xl md:text-3xl text-white/90 my-6 font-light max-w-4xl mx-auto">
                    Empowering businesses with comprehensive marketing solutions tailored to drive growth and success.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12 bg-yellow-800 p-10 rounded-lg">
                <div className="text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h2>
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                        We are dedicated to providing comprehensive marketing solutions tailored to your unique needs. Whether you're getting off the ground or taking your brand to the next level, we're here to support you every step of the way.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 w-fit bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Brand Development</span>
                        <span className="px-4 py-2 w-fit bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">SEO</span>
                        <span className="px-4 py-2 w-fit bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Email Marketing</span>
                        <span className="px-4 py-2 w-fit bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">CRO</span>
                    </div>
                </div>
                
                <div className="text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Tailored Strategies</h3>
                                <p className="text-white/70">Custom solutions designed for your specific business goals</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Proven Results</h3>
                                <p className="text-white/70">Data-driven approach with measurable outcomes</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Expert Support</h3>
                                <p className="text-white/70">Dedicated team supporting you every step of the way</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button 
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    className=" w-fit inline-block bg-deep-red hover:bg-green-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 mr-4"
                >
                    Explore Our Services
                </button>
                <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="w-fit inline-block bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                    Get Started Today
                </button>
            </div>
        </div>
    </section>
  );
}

export default Hero;