"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'How much does a plumber cost?',
    answer: 'Plumbing service costs vary depending on the type of service needed, the time required, and the complexity of the job. We offer free estimates for all services, and our pricing is competitive and transparent. We also offer discounts for seniors, military personnel, and first-time customers.'
  },
  {
    id: 2,
    question: 'Do you offer emergency plumbing services?',
    answer: 'Yes, we provide 24/7 emergency plumbing services. Our team is always ready to respond to urgent plumbing issues like burst pipes, severe leaks, and sewer backups. Call our emergency line for immediate assistance.'
  },
  {
    id: 3,
    question: 'Are your plumbers licensed and insured?',
    answer: 'Absolutely! All our plumbers are fully licensed, insured, and have undergone extensive training and background checks. We maintain the highest standards of professionalism and expertise in the industry.'
  },
  {
    id: 4,
    question: 'How quickly can you respond to a plumbing emergency?',
    answer: 'We typically respond to emergency calls within 30-60 minutes, depending on your location and the current call volume. Rest assured, we prioritize emergency situations and will get to you as quickly as possible.'
  },
  {
    id: 5,
    question: 'Do you offer warranties on your plumbing work?',
    answer: 'Yes, we stand behind our work with a satisfaction guarantee. We offer warranties on both our labor and the parts we install. The specific warranty terms depend on the service provided, but we\'ll always clearly explain what\'s covered.'
  },
  {
    id: 6,
    question: 'What areas do you serve?',
    answer: 'We provide plumbing services to Anytown, Springfield, Riverside, Lakeside, Hillcrest, and all surrounding areas within a 30-mile radius. If you\'re unsure if we service your area, please give us a call.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="faq">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Find answers to our most commonly asked questions. Can't find what you're looking for? Just give us a call!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="mb-4 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full p-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200">
                    {faq.question}
                  </h3>
                  <div className="text-blue-700 dark:text-blue-400">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
              </button>
              
              <div 
                className={`px-4 pb-4 text-gray-700 dark:text-gray-300 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-700 dark:text-gray-300">
            Have more questions? <a href="tel:+1234567890" className="text-blue-700 dark:text-blue-400 font-medium">Call us</a> or <a href="/contact" className="text-blue-700 dark:text-blue-400 font-medium">contact us online</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 