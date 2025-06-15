import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWrench, FaTint, FaShower, FaToilet, FaFaucet, FaFire, FaWater, FaHouseDamage } from 'react-icons/fa';

const serviceItems = [
  {
    id: 1,
    title: 'Emergency Repairs',
    description: 'Fast response for burst pipes, water leaks, sewer backups, and more.',
    icon: <FaWrench className="w-10 h-10 text-blue-700 dark:text-blue-400" />,
    link: '/services#emergency'
  },
  {
    id: 2,
    title: 'Gas and Piping',
    description: 'Professional gas line installation, repair, and testing services.',
    icon: <FaFire className="w-10 h-10 text-blue-700 dark:text-blue-400" />,
    link: '/services#gas-piping'
  },
  {
    id: 3,
    title: 'Water Heater Installation',
    description: 'Repair, installation, and maintenance for all types of water heaters.',
    icon: <FaShower className="w-10 h-10 text-blue-700 dark:text-blue-400" />,
    link: '/services#water-heaters'
  },
  {
    id: 4,
    title: 'Toilet Repair & Installation',
    description: 'Quick and reliable toilet repair and installation services.',
    icon: <FaToilet className="w-10 h-10 text-blue-700 dark:text-blue-400" />,
    link: '/services#toilet-repair'
  },
  {
    id: 5,
    title: 'Sewer Laterals',
    description: 'Expert repair and replacement of sewer lateral lines.',
    icon: <FaWater className="w-10 h-10 text-blue-700 dark:text-blue-400" />,
    link: '/services#sewer-laterals'
  },
  {
    id: 6,
    title: 'General Plumbing',
    description: 'Complete plumbing solutions for residential and commercial properties.',
    icon: <FaHouseDamage className="w-10 h-10 text-blue-700 dark:text-blue-400" />,
    link: '/services#general-plumbing'
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Plumbing Services</h2>
          <p className="section-subtitle mx-auto">
            We provide a full range of plumbing services for residential and commercial properties throughout San Antonio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <Link 
                href={service.link} 
                className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium inline-flex items-center"
              >
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 