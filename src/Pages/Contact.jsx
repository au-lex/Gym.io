import React from 'react';
import { useSpring, animated } from 'react-spring';
import Footer from "../../src/Component/Footer"
import Header from "../../src/Component/Header"
import Loader from "../../src/Component/Loader"


const ContactUs = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (

    <>
<Loader />
    <Header />

    
    <div className="flex flex-col md:pt-[6rem] px-4 justify-center items-center min-h-screen bg-gray-100 py-16">
      {/* <h1 className="text-4xl font-bold text-center mb-8">Get in touch and transform your fitness journey!</h1> */}
      <div className="flex flex-col space-y-8 w-full md:w-1/2">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-700">Your Name:</label>
          <input type="text" id="name" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-700">Your Email:</label>
          <input type="email" id="email" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-gray-700">Your Message:</label>
          <textarea id="message" rows="5" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Send Message</button>
      </div>
      <div className="flex mt-16 space-x-4">
        <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          <i className="fas fa-phone text-xl"></i> +1 234 567 890
        </a>
        <a href="mailto:info@yourgym.com" className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          <i className="fas fa-envelope text-xl"></i> info@yourgym.com
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          <i className="fab fa-instagram text-xl"></i> yourgym_official
        </a>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default ContactUs;
