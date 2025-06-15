import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <FaExclamationTriangle className="text-amber-500 w-24 h-24" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-y-4">
              <Link 
                href="/" 
                className="btn-primary inline-flex items-center justify-center"
              >
                <FaArrowLeft className="mr-2" />
                Back to Home
              </Link>
              
              <p className="text-gray-600 dark:text-gray-400">
                Need help? <Link href="/contact" className="text-blue-700 dark:text-blue-400 underline">Contact us</Link>
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h2 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">
                Looking for plumbing services?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We offer a wide range of plumbing services for residential and commercial properties.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="btn-secondary">
                  View Our Services
                </Link>
                <a href="tel:+1234567890" className="btn-primary">
                  Call Now: (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 