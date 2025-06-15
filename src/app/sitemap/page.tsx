import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Sitemap() {
  const mainPages = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Service Areas', url: '/areas' },
    { name: 'Contact', url: '/contact' },
  ];

  const servicePages = [
    { name: 'Emergency Plumbing', url: '/services#emergency' },
    { name: 'Drain Cleaning', url: '/services#drain-cleaning' },
    { name: 'Water Heater Services', url: '/services#water-heaters' },
    { name: 'Toilet Repair & Installation', url: '/services#toilet-repair' },
    { name: 'Faucet & Fixture Services', url: '/services#faucet-repair' },
    { name: 'Sump Pump Services', url: '/services#sump-pump' },
    { name: 'Residential Plumbing', url: '/services#residential' },
    { name: 'Commercial Plumbing', url: '/services#commercial' },
    { name: 'Preventative Maintenance', url: '/services#maintenance' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Sitemap', url: '/sitemap' },
  ];

  return (
    <>
      <Navbar />
      <main className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8">Sitemap</h1>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Main Pages</h2>
                <ul className="space-y-2">
                  {mainPages.map((page) => (
                    <li key={page.url} className="pl-4 border-l-4 border-blue-700 dark:border-blue-500">
                      <Link 
                        href={page.url}
                        className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Services</h2>
                <ul className="space-y-2">
                  {servicePages.map((page) => (
                    <li key={page.url} className="pl-4 border-l-4 border-blue-700 dark:border-blue-500">
                      <Link 
                        href={page.url}
                        className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Legal Pages</h2>
                <ul className="space-y-2">
                  {legalPages.map((page) => (
                    <li key={page.url} className="pl-4 border-l-4 border-blue-700 dark:border-blue-500">
                      <Link 
                        href={page.url}
                        className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 