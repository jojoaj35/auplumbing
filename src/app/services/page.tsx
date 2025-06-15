import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { FaWrench, FaTint, FaShower, FaToilet, FaFaucet, FaSink, FaHome, FaBuilding, FaTools } from 'react-icons/fa';

const services = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    shortDesc: 'Fast response for burst pipes, water leaks, sewer backups, and more.',
    fullDesc: 'Our 24/7 emergency plumbing service is designed to respond quickly to urgent situations. We understand that plumbing emergencies can cause significant damage to your property if not addressed promptly. Our technicians are equipped to handle burst pipes, major leaks, sewer backups, and other urgent plumbing issues at any hour of the day or night.',
    icon: <FaWrench className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_4567.jpg'
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortDesc: 'Professional drain cleaning services to fix clogs and prevent future issues.',
    fullDesc: 'Our comprehensive drain cleaning services use advanced techniques and equipment to clear stubborn clogs and buildup in your drains. We not only resolve immediate blockages but also help prevent future issues by identifying and addressing the root causes of drain problems. From kitchen sinks to main sewer lines, we can keep your drains flowing freely.',
    icon: <FaTint className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/FullSizeRender.jpeg'
  },
  {
    id: 'water-heaters',
    title: 'Water Heater Services',
    shortDesc: 'Repair, installation, and maintenance for all types of water heaters.',
    fullDesc: 'We provide complete water heater services for both tank and tankless models. Whether you need a new water heater installed, repairs to your existing unit, or routine maintenance to extend its lifespan, our technicians have the expertise to handle all your water heater needs. We can help you choose the right size and type of water heater for your home and ensure it operates efficiently.',
    icon: <FaShower className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_9834.jpg'
  },
  {
    id: 'toilet-repair',
    title: 'Toilet Repair & Installation',
    shortDesc: 'Quick and reliable toilet repair and installation services.',
    fullDesc: 'Our toilet repair and installation services cover everything from fixing running toilets and leaks to complete replacements. We can resolve common issues like clogs, weak flushes, and constant running, as well as install new, water-efficient models that can save you money on your water bills. Our technicians will ensure your toilets function properly and reliably.',
    icon: <FaToilet className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_9835.jpg'
  },
  {
    id: 'faucet-repair',
    title: 'Faucet & Fixture Services',
    shortDesc: 'Fix dripping faucets, replace old fixtures, and upgrade to modern styles.',
    fullDesc: 'We offer comprehensive faucet and fixture services, including repairs for leaky or dripping faucets, installation of new fixtures, and complete bathroom or kitchen upgrades. Our technicians can help you select and install fixtures that match your style preferences while improving functionality and water efficiency. We work with all major brands and styles.',
    icon: <FaFaucet className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_9836.jpg'
  },
  {
    id: 'sump-pump',
    title: 'Sump Pump Services',
    shortDesc: 'Installation, maintenance, and repair for sump pumps.',
    fullDesc: 'Our sump pump services help protect your home from water damage during heavy rains and flooding. We install reliable sump pump systems, perform routine maintenance to ensure they\'re ready when needed, and provide prompt repairs when issues arise. We can also upgrade existing systems with battery backups to ensure protection even during power outages.',
    icon: <FaSink className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_9837.jpg'
  },
  {
    id: 'residential',
    title: 'Residential Plumbing',
    shortDesc: 'Complete plumbing services for homes of all sizes.',
    fullDesc: 'Our residential plumbing services cover all aspects of home plumbing, from small repairs to complete repiping projects. We address issues in kitchens, bathrooms, laundry rooms, and outdoor plumbing systems. Our technicians understand the importance of minimizing disruption to your home life while delivering quality workmanship that lasts.',
    icon: <FaHome className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_9838.jpg'
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    shortDesc: 'Reliable plumbing solutions for businesses and commercial properties.',
    fullDesc: 'Our commercial plumbing services are designed to meet the unique needs of businesses, minimizing downtime and disruption to your operations. We handle everything from routine maintenance to emergency repairs and major installations for offices, restaurants, retail spaces, and other commercial properties. We can work around your business hours to reduce impact on your customers and employees.',
    icon: <FaBuilding className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_9839.jpg'
  },
  {
    id: 'maintenance',
    title: 'Preventative Maintenance',
    shortDesc: 'Regular maintenance to prevent costly plumbing emergencies.',
    fullDesc: 'Our preventative maintenance programs help you avoid unexpected plumbing emergencies and costly repairs. Regular inspections and maintenance of your plumbing system can identify potential issues before they become major problems. We offer customized maintenance plans for both residential and commercial properties to keep your plumbing system running smoothly year-round.',
    icon: <FaTools className="w-12 h-12 text-blue-700 dark:text-blue-400" />,
    image: '/images/IMG_9840.jpg'
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plumbing Services</h1>
              <p className="text-xl text-blue-100">
                Professional plumbing services for residential and commercial properties. 
                From emergency repairs to routine maintenance, we do it all.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 ml-4">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                      {service.shortDesc}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.fullDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                      <a 
                        href="tel:+1234567890" 
                        className="btn-primary flex items-center"
                      >
                        Request Service
                      </a>
                      <Link 
                        href="/contact" 
                        className="btn-secondary flex items-center"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                  {service.id !== 'water-heaters' && service.id !== 'toilet-repair' && service.id !== 'faucet-repair' && service.id !== 'sump-pump' && service.id !== 'residential' && service.id !== 'commercial' && service.id !== 'maintenance' && (
                    <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                      <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Additional Services</h2>
              <p className="section-subtitle mx-auto">
                Beyond our core services, we also provide these specialized plumbing solutions:
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">Pipe Replacement</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Complete or partial pipe replacement for old, damaged, or corroded plumbing systems.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">Gas Line Services</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Safe and code-compliant installation, repair, and maintenance of gas lines.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">Backflow Prevention</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Installation and testing of backflow prevention devices to protect your water supply.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">Water Filtration</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Whole-house water filtration systems for cleaner, healthier water throughout your home.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">Hydro Jetting</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    High-pressure water jetting to clear severe clogs and clean drain lines thoroughly.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">Plumbing Inspections</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Thorough inspections for home buyers, sellers, or as part of routine maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Process */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Service Process</h2>
              <p className="section-subtitle mx-auto">
                Here's what to expect when you choose Pro Plumbing for your plumbing needs:
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">1. Contact Us</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Call our office or fill out our online form to request service. For emergencies, we're available 24/7.
                        </p>
                      </div>
                      <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-700 dark:bg-blue-600 rounded-full text-white text-xl font-bold mx-4">
                        1
                      </div>
                      <div className="flex-1 md:pl-8 md:text-left hidden md:block"></div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-1 md:pr-8 md:text-right hidden md:block"></div>
                      <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-700 dark:bg-blue-600 rounded-full text-white text-xl font-bold mx-4">
                        2
                      </div>
                      <div className="flex-1 md:pl-8 md:text-left mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">2. Diagnosis</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Our licensed plumber will arrive at your property, assess the situation, and explain the issue.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">3. Upfront Pricing</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          We provide a detailed estimate before starting any work, so you know exactly what to expect.
                        </p>
                      </div>
                      <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-700 dark:bg-blue-600 rounded-full text-white text-xl font-bold mx-4">
                        3
                      </div>
                      <div className="flex-1 md:pl-8 md:text-left hidden md:block"></div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-1 md:pr-8 md:text-right hidden md:block"></div>
                      <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-700 dark:bg-blue-600 rounded-full text-white text-xl font-bold mx-4">
                        4
                      </div>
                      <div className="flex-1 md:pl-8 md:text-left mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">4. Quality Service</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Our skilled technicians complete the job with attention to detail and respect for your property.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">5. Follow-Up</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          We ensure you're completely satisfied with our work and answer any questions you may have.
                        </p>
                      </div>
                      <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-700 dark:bg-blue-600 rounded-full text-white text-xl font-bold mx-4">
                        5
                      </div>
                      <div className="flex-1 md:pl-8 md:text-left hidden md:block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </>
  );
} 