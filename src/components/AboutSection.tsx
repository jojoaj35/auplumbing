import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaTools, FaUsers } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaAward className="w-8 h-8 text-blue-700 dark:text-blue-400" />,
    title: 'Licensed & Insured',
    description: 'Our team consists of fully licensed and insured plumbing professionals.'
  },
  {
    id: 2,
    icon: <FaTools className="w-8 h-8 text-blue-700 dark:text-blue-400" />,
    title: 'Quality Workmanship',
    description: 'We take pride in our work and guarantee all repairs and installations.'
  },
  {
    id: 3,
    icon: <FaUsers className="w-8 h-8 text-blue-700 dark:text-blue-400" />,
    title: 'Customer Satisfaction',
    description: 'Our customers are our top priority, and we strive for 100% satisfaction.'
  },
  {
    id: 4,
    icon: <FaAward className="w-8 h-8 text-blue-700 dark:text-blue-400" />,
    title: 'Fourth Generation',
    description: 'A family-owned business with deep community roots and generations of plumbing expertise.'
  }
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
              <Image
                src="/images/IMG_9821.jpg"
                alt="A.U. Plumbing LLC Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-2xl font-bold">20+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">About A.U. Plumbing LLC</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A.U. Plumbing LLC has been serving the San Antonio community with dedication and expertise.
              Our team of experienced plumbers is committed to providing high-quality 
              plumbing services for residential and commercial properties throughout the area.
              We are a fourth generation company with deep roots in the community.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We pride ourselves on our reliability, professionalism, and commitment to 
              customer satisfaction. From emergency repairs to water heater installation and gas line services, 
              we're here to help with all your plumbing needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="text-center p-4">
                  <div className="flex justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Meet Our Team Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4 text-center">Meet Our Team</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Andrew */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-2 rounded-full overflow-hidden shadow-lg">
                    <Image src="/images/IMG_9834.jpg" alt="Andrew Ugarte" fill className="object-cover object-top" />
                  </div>
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Andrew Ugarte</span>
                  <span className="text-sm text-blue-700 dark:text-blue-300 mb-1">Owner & Founder</span>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    With 20+ years of experience in the plumbing industry, Andrew leads our team with expertise and dedication to customer satisfaction.
                  </p>
                </div>
                {/* Christopher */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-2 rounded-full overflow-hidden shadow-lg">
                    <Image src="/images/IMG_9844.jpg" alt="Christopher Elizondo" fill className="object-cover" />
                  </div>
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Christopher Elizondo</span>
                  <span className="text-sm text-blue-700 dark:text-blue-300 mb-1">Lead Plumber</span>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Expert in residential and commercial plumbing with a focus on quality workmanship.
                  </p>
                </div>
                {/* Marcos */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-2 rounded-full overflow-hidden shadow-lg">
                    <Image src="/images/IMG_9854.jpg" alt="Marcos Gonzales" fill className="object-cover" />
                  </div>
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Marcos Gonzales</span>
                  <span className="text-sm text-blue-700 dark:text-blue-300 mb-1">Senior Plumber</span>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Specializes in emergency plumbing services and complex installations.
                  </p>
                </div>
                {/* Elijah */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-2 rounded-full overflow-hidden shadow-lg">
                    <Image src="/images/IMG_9857.jpg" alt="Elijah Ramirez" fill className="object-cover object-center" />
                  </div>
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Elijah Ramirez</span>
                  <span className="text-sm text-blue-700 dark:text-blue-300 mb-1">Plumbing Technician</span>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Skilled in maintenance and repair with a commitment to customer service.
                  </p>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 