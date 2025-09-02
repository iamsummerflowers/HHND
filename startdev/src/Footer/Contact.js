import { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";
import emailjs from '@emailjs/browser';



function Contact() {

    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ygkfx7s',
      'template_d66swgn',
      form.current,
      'zFLZH29bRNDazrYni'
      ).then((result) => {
        setMessageSent(true);  
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("message in error");
      });

      };


      // const [formData, setFormData] = useState({
      //     name: '',
      //     email: '',
      //     message: ''
      // });
      // const [showMessage, setShowMessage] = useState(false);

      // const handleInputChange = (e) => {
      //     setFormData({
      //         ...formData,
      //         [e.target.name]: e.target.value
      //     });
      // };

      // const handleSubmit = (e) => {
      //     e.preventDefault();
      //     setShowMessage(true);
      //     setFormData({ name: '', email: '', message: '' });
          
      //     setTimeout(() => {
      //         setShowMessage(false);
      //     }, 5000);
      // };

    return (
      <section id="contact" className="py-20 bg-white-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
                  <p className="text-xl text-gray-300">Ready to take your business to the next level? Let's discuss your marketing needs.</p>
              </div>
              <div className="bg-black border-4 border-yellow-800/30 rounded-xl p-8">
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                          <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                              <input 
                                  type="text" 
                                  id="name" 
                                  name="user_name" 
                                  // value={formData.name}
                                  // onChange={handleInputChange}
                                  required 
                                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-black focus:outline-none focus:border-dark-yellow transition-colors"
                              />
                          </div>
                          <div>
                              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address *</label>
                              <input 
                                  type="email" 
                                  id="email" 
                                  name="user_email" 
                                  // value={formData.email}
                                  // onChange={handleInputChange}
                                  required 
                                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-black focus:outline-none focus:border-dark-yellow transition-colors"
                              />
                          </div>
                      </div>
                      <div>
                          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
                          <textarea 
                              id="message" 
                              name="message" 
                              rows="6" 
                              // value={formData.message}
                              // onChange={handleInputChange}
                              required 
                              className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-black focus:outline-none focus:border-dark-yellow transition-colors" 
                              placeholder="Tell us about your business and marketing goals..."
                          />
                      </div>
                      <div className="text-center">
                          <button 
                              type="submit"
                              value="Send"
                              id="send"
                              className=" w-fit bg-yellow-800 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                              Send Message
                          </button>
                      </div>
                  </form>
                  {messageSent && (
                      <div className="mt-4 p-4 rounded-md bg-lime-600">
                          <div className="flex items-center">
                              {/* <svg className="w-5 h-5 text-lime-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg> */}
                              <span className="text-light-green font-bold text-center">Thank you! Your message has been received. We'll get back to you soon.</span>
                          </div>
                          {/* <p className="text-gray-300 text-sm mt-2"><strong>Note:</strong> This is a demo form. In a live website, this would send your message to our team.</p> */}
                      </div>
                  )}
              </div>
          </div>
      </section>
    );
  }
  
  export default Contact;