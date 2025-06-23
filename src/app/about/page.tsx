import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { FaCheckCircle, FaTools, FaUsers, FaAward, FaHistory, FaHandshake, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const values = [
  {
    id: 1,
    icon: <FaTools className="h-10 w-10 text-blue-700 dark:text-blue-400" />,
    title: 'Quality',
    description: 'We use only the highest quality materials and follow the latest industry best practices.'
  },
  {
    id: 2,
    icon: <FaUsers className="h-10 w-10 text-blue-700 dark:text-blue-400" />,
    title: 'Reliability',
    description: 'You can count on us to show up on time and get the job done right the first time.'
  },
  {
    id: 3,
    icon: <FaHandshake className="h-10 w-10 text-blue-700 dark:text-blue-400" />,
    title: 'Integrity',
    description: 'We provide honest assessments and transparent pricing with no hidden fees.'
  }
];

const team = [
  {
    id: 1,
    name: 'Andrew Ugarte',
    position: 'Owner & Founder',
    bio: 'With 20+ years of experience in the plumbing industry, Andrew leads our team with expertise and dedication to customer satisfaction.',
    image: '/images/IMG_9834.jpg'
  },
  {
    id: 2,
    name: 'Marcos Gonzales',
    position: 'Lead Plumber',
    bio: 'Expert in residential and commercial plumbing with a focus on quality workmanship.',
    image: '/images/IMG_9854.jpg'
  },
  {
    id: 3,
    name: 'Christopher Elizondo',
    position: 'Senior Plumber',
    bio: 'Specializes in emergency plumbing services and complex installations.',
    image: '/images/IMG_9844.jpg'
  },
  {
    id: 4,
    name: 'Elijah Ramirez',
    position: 'Plumbing Technician',
    bio: 'Skilled in maintenance and repair with a commitment to customer service.',
    image: '/images/IMG_9857.jpg'
  }
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About A.U Plumbing LLC</h1>
              <p className="text-xl text-blue-100">
                Your trusted plumbing experts in San Antonio and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                A.U Plumbing LLC was founded with a commitment to providing exceptional plumbing services to the San Antonio community. As a fourth generation company, we have deep roots in the community. Under the leadership of Andrew Ugarte, we've grown into a trusted name in the plumbing industry, known for our reliability, expertise, and customer-focused approach.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our team of licensed and experienced plumbers is dedicated to delivering the highest quality service, whether it's an emergency repair or a planned installation. We take pride in our work and stand behind every job we complete.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={
                        member.name === 'Andrew Ugarte' 
                          ? { objectPosition: 'center 60%' }
                          : member.name === 'Elijah Ramirez'
                          ? { objectPosition: 'center 20%' }
                          : {}
                      }
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.position}</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">Quality Service</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We take pride in delivering the highest quality plumbing services to every customer.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">Customer Focus</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Your satisfaction is our top priority. We're committed to exceeding your expectations.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">Professional Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our team maintains the highest standards of professionalism and expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <FaPhone className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a href="tel:+12106278141" className="text-gray-700 dark:text-gray-300">
                    (210) 627-8141
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <FaEnvelope className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:auplumbing01@yahoo.com" className="text-gray-700 dark:text-gray-300">
                    auplumbing01@yahoo.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <FaMapMarkerAlt className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    San Antonio, TX
                  </p>
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