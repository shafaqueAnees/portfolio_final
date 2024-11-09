import React from 'react';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import Image from 'next/image';
import footerImg from '../../../public/assests/picture/logo1.jpeg';

const Footer = () => {
  return (
    <div className="bg-blue-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          
          {/* Logo and Brand Name */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={footerImg} width={40} alt="Logo" />
            <span className="ml-3 text-xl">Educational Tutorial</span>
          </a>
          
          {/* Copyright Info */}
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 — Educational Tutorial
            <a 
              href="https://twitter.com/knyttneve" 
              className="text-gray-600 ml-1" 
              rel="noopener noreferrer" 
              target="_blank">
              @ copyright by Shafaq
            </a>
          </p>
          
          {/* Social Media Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            
            {/* YouTube Icon */}
            <a 
              className="text-gray-500 hover:text-red-600 transition-colors duration-300" 
              target="_blank" 
              href='https://www.youtube.com/@educationalandcookingtutorial'>
              <BsYoutube className="text-2xl ml-5" />
            </a>
            
            {/* GitHub Icon */}
            <a 
              className="text-gray-500 hover:text-purple-600 transition-colors duration-300" 
              target="_blank" 
              href='https://github.com/shafaqueAnees?tab=repositories'>
              <BsGithub className="text-2xl ml-5" />
            </a>
            
            {/* LinkedIn Icon */}
            <a 
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300" 
              target="_blank" 
              href='https://www.linkedin.com/in/shafaq-anees-65490011b/'>
              <BsLinkedin className="text-2xl ml-5" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
