import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaCheck, FaClock, FaTools, FaShieldAlt } from 'react-icons/fa';

export default function SanAntonioPlumber() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                San Antonio's Most Trusted Plumbing Experts
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Looking for a reliable plumber in San Antonio? A.U Plumbing LLC is your #1 choice for professional plumbing services. Licensed, insured, and available 24/7 for emergency plumbing needs.
              </p>
              <a 
                href="tel:+12106278141" 
                className="btn-primary inline-flex items-center text-lg px-8 py-3"
              >
                <FaPhone className="mr-2" />
                Call Now: (210) 627-8141
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose A.U Plumbing LLC in San Antonio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <FaClock className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600 dark:text-gray-300">Available around the clock for emergency plumbing needs in San Antonio</p>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <FaTools className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Plumbers</h3>
                <p className="text-gray-600 dark:text-gray-300">Licensed and experienced plumbers serving San Antonio for years</p>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <FaShieldAlt className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 dark:text-gray-300">Fully licensed and insured for your peace of mind</p>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <FaCheck className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600 dark:text-gray-300">100% satisfaction guaranteed on all our plumbing services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our San Antonio Plumbing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Emergency Plumbing</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>24/7 Emergency Response</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Leak Detection & Repair</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Burst Pipe Repair</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Water Heater Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Water Heater Installation</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Water Heater Repair</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Water Heater Maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Drain Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Drain Cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Sewer Line Repair</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Drain Camera Inspection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Serving All of San Antonio</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-center mb-8">
                We proudly serve the entire San Antonio area, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold">San Antonio</h3>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold">Universal City</h3>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold">Converse</h3>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold">Schertz</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need a Plumber in San Antonio?</h2>
              <p className="text-xl mb-8">
                Call us now for fast, reliable plumbing services in San Antonio and surrounding areas.
              </p>
              <a 
                href="tel:+12106278141" 
                className="btn-primary inline-flex items-center text-lg px-8 py-3"
              >
                <FaPhone className="mr-2" />
                Call Now: (210) 627-8141
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 