import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const areas = [
  {
    id: 1,
    city: 'San Antonio',
    description: 'Our headquarters are located in San Antonio, where we provide expert plumbing services throughout the metropolitan area.',
    zip: ['78218', '78217', '78244', '78247', '78233', '78239']
  },
  {
    id: 2,
    city: 'Universal City',
    description: 'We provide complete plumbing services to all Universal City neighborhoods with fast response times.',
    zip: ['78148', '78150']
  },
  {
    id: 3,
    city: 'Converse',
    description: 'Our skilled plumbers serve the entire Converse area for both residential and commercial plumbing needs.',
    zip: ['78109']
  },
  {
    id: 4,
    city: 'Schertz',
    description: 'Schertz residents rely on our expertise for all their plumbing needs, from repairs to installations.',
    zip: ['78154']
  },
  {
    id: 5,
    city: 'Cibolo',
    description: 'We are proud to offer exceptional plumbing services to the Cibolo community.',
    zip: ['78108']
  },
  {
    id: 6,
    city: 'Marion',
    description: 'Marion homeowners and businesses count on our professional plumbing services.',
    zip: ['78124']
  }
];

export default function ServiceAreas() {
  return (
    <>
      <Navbar />
      <main>
        
{/* Map Section */}
<section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Coverage Map</h2>
              <p className="section-subtitle mx-auto">
                We serve the Greater San Antonio area, focusing on the Northeast region including Universal City, Converse, Schertz, and surrounding communities.
              </p>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224735.85928012645!2d-98.6479879!3d29.4569868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b30c70ff3faa42f%3A0x3ad4e1a64429d61f!2sA.U.%20Plumbing%20LLC!5e0!3m2!1sen!2sus!4v1722005789089!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Don't see your area listed? We may still be able to help!
              </p>
              <a 
                href="tel:+12106278141" 
                className="btn-primary inline-flex items-center"
              >
                <FaPhone className="mr-2" />
                Call to Check Availability
              </a>
            </div>
          </div>
        </section>
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
              <p className="text-xl text-blue-100">
                A.U. Plumbing LLC provides professional plumbing services throughout San Antonio and surrounding communities.
                Not sure if we service your location? Give us a call!
              </p>
            </div>
          </div>
        </section>
        {/* Service Areas */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area) => (
                <div 
                  key={area.id} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-blue-700 dark:text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">{area.city}</h2>
                      <div className="flex flex-wrap gap-2 mt-1 mb-3">
                        {area.zip.map((zipCode) => (
                          <span 
                            key={zipCode} 
                            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                          >
                            ZIP: {zipCode}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* Additional Notes */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Additional Service Information
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  A.U. Plumbing LLC is based in San Antonio (78218) and primarily serves the northeast region of San Antonio and surrounding communities. Our service areas continue to expand as our team grows.
                </p>
                <p>
                  We are licensed plumbers (License #RMP-24-45389) providing a full range of residential and commercial plumbing services including gas line installation, water heater installation, toilet repair, sewer laterals, and general plumbing.
                </p>
                <p>
                  Emergency services may be available outside our standard service areas for an additional travel fee. Please call (210) 627-8141 to inquire about availability and rates for your specific location.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 