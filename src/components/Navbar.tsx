"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 mr-2">
            <Image 
              src="/images/IMG_3816.jpg"
              alt="A.U Plumbing LLC Logo"
              fill
              className="object-contain rounded-md" 
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-900 dark:text-white">A.U Plumbing LLC</h1>
            <p className="text-xs text-blue-600 dark:text-blue-300">Professional Plumbing Services</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">
            About Us
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">
            Services
          </Link>
          <Link href="/areas" className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">
            Service Areas
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">
            Contact
          </Link>
        </nav>

        {/* Call Now Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="tel:+12106278141" 
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            <FaPhone className="mr-2" />
            <span>Call Now: (210) 627-8141</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 pb-4 px-4 border-t dark:border-gray-700">
          <nav className="flex flex-col space-y-4 mt-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/areas" 
              className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Service Areas
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:+12106278141" 
              className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors duration-300 max-w-fit"
              onClick={() => setIsOpen(false)}
            >
              <FaPhone className="mr-2" />
              <span>Call Now: (210) 627-8141</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 