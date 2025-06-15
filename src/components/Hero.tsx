import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-16 md:pt-24 md:pb-24">
      {/* Emergency Service Badge */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-3">
        <div className="emergency-badge flex items-center gap-2">
          <span className="animate-pulse">●</span> 24/7 Emergency Plumbing Service in San Antonio
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-white mb-4">
              San Antonio's Most Trusted Plumbing Experts
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              A.U Plumbing LLC provides professional plumbing services throughout San Antonio and surrounding areas. From emergency repairs to water heater installation, our licensed plumbers deliver fast, reliable service for your home or business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+12106278141" className="btn-primary flex items-center justify-center">
                <FaPhone className="mr-2" />
                <span>Call Now: (210) 627-8141</span>
              </a>
              <Link href="/contact" className="btn-secondary flex items-center justify-center">
                <FaCalendarAlt className="mr-2" />
                <span>Schedule Service</span>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Free Estimates</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">100% Satisfaction</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Same-Day Service</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/IMG_0043.jpeg"
                alt="Professional San Antonio Plumber"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 