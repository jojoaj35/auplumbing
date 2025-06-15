import React from 'react';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Plumber Right Now?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Our emergency plumbing services are available to help you with any plumbing issue in the San Antonio area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12106278141" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-bold text-lg flex items-center justify-center transition-colors duration-300"
            >
              <FaPhone className="mr-2" />
              <span>Call Now: (210) 627-8141</span>
            </a>
            <Link 
              href="/contact" 
              className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-bold text-lg transition-colors duration-300"
            >
              Schedule Service
            </Link>
          </div>
          
          <div className="mt-8 p-4 bg-blue-800 rounded-lg inline-block">
            <p className="text-blue-100 text-sm">
              <span className="font-bold text-white">Licensed & Insured:</span> A.U. Plumbing LLC is a state-licensed contractor (License #RMP-24-45389).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 