"use client";

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError(false);

    try {
      await emailjs.send(
        'service_xxxxxxx', // Replace with your EmailJS service ID
        'template_xxxxxxx', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'joelwebdev04@gmail.com',
        },
        'public_key_xxxxxxx' // Replace with your EmailJS public key
      );

      setSubmitMessage('Thanks for contacting us! We\'ll get back to you shortly.');
      setFormData(initialState);
    } catch (error) {
      setSubmitError(true);
      setSubmitMessage('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mx-auto">
            Need plumbing services? Contact us today for a free estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FaPhone className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-1">Call Us</h4>
                  <a 
                    href="tel:+12106278141" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  >
                    (210) 627-8141
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FaEnvelope className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-1">Email Us</h4>
                  <a 
                    href="mailto:auplumbing01@yahoo.com" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  >
                    auplumbing01@yahoo.com
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-1">Our Location</h4>
                  <address className="text-gray-700 dark:text-gray-300 not-italic">
                    PO Box 323<br />
                    Converse, TX 78109
                  </address>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Mon-Fri: 8am-6pm, Sat: 9am-4pm
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <h4 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-3">Service Areas</h4>
              <p className="text-gray-700 dark:text-gray-300">
                We proudly serve San Antonio, Universal City, Converse, Schertz, and surrounding areas.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">Request Service</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="drain">Drain Cleaning</option>
                  <option value="water-heater">Water Heater Service</option>
                  <option value="toilet">Toilet Repair</option>
                  <option value="faucet">Faucet Repair</option>
                  <option value="sump-pump">Sump Pump Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Request Service'
                )}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-md ${submitError ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200' : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 