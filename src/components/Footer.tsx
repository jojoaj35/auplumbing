import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYelp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-2 bg-white rounded-full p-1">
                <Image 
                  src="https://via.placeholder.com/100x100/FFFFFF/1e3a8a?text=A"
                  alt="A.U Plumbing LLC" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">A.U Plumbing LLC</span>
            </div>
            <p className="text-blue-200 mb-4">
              Professional plumbing services for residential and commercial properties in San Antonio and surrounding areas. Licensed, insured, and committed to quality.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://www.yelp.com/biz/au-plumbing-san-antonio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"
                aria-label="Yelp"
              >
                <FaYelp size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/areas" className="text-blue-200 hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#emergency" className="text-blue-200 hover:text-white transition-colors">
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link href="/services#drain-cleaning" className="text-blue-200 hover:text-white transition-colors">
                  Drain Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#water-heaters" className="text-blue-200 hover:text-white transition-colors">
                  Water Heater Service
                </Link>
              </li>
              <li>
                <Link href="/services#toilet-repair" className="text-blue-200 hover:text-white transition-colors">
                  Toilet Repair
                </Link>
              </li>
              <li>
                <Link href="/services#faucet-repair" className="text-blue-200 hover:text-white transition-colors">
                  Faucet Repair
                </Link>
              </li>
              <li>
                <Link href="/services#sump-pump" className="text-blue-200 hover:text-white transition-colors">
                  Sump Pump Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-blue-300" />
                <a href="tel:+12106278141" className="text-blue-200 hover:text-white transition-colors">
                  (210) 627-8141
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-blue-300" />
                <a href="mailto:auplumbing01@yahoo.com" className="text-blue-200 hover:text-white transition-colors">
                  auplumbing01@yahoo.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-blue-300 mt-1" />
                <address className="text-blue-200 not-italic">
                  PO Box 323<br />
                  Converse, TX 78109
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            &copy; {currentYear} A.U Plumbing LLC. All rights reserved. | License #RMP-24-45389
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-blue-200 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 