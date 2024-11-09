"use client"; // Ensure this component is treated as a client component

import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from 'next/image';
import apple from '../../../public/assests/picture/apple-logo.svg';

const Navbar = () => {
  // Toggle for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white z-50 sticky top-0 shadow-lg transition-all duration-300 ease-in-out">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={"/assests/picture/logo1.jpeg"} width={100} height={30} alt="Logo" />
            <span className="ml-3 text-3xl font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 ease-in-out">
              Educational Tutorial
            </span>
          </a>
          
          {/* Navbar Links */}
          <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
            <a href="/" className="text-lg text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out">Home</a>
            <a href="#about" className="text-lg text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out">About</a>
            <a href="#skills" className="text-lg text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out">Skills</a>
            <a href="#projects" className="text-lg text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out">Projects</a>
            <a href="#contact" className="text-lg text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-2xl text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Download CV button */}
          <a
            href="/assests/picture/cv.pdf"
            download
            className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 mt-4 md:mt-0 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out"
          >
            Download CV
            <FaCloudDownloadAlt className="ml-2 text-xl" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
