import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-blue-100">
                Have a plumbing issue or need a quote? Reach out to our team today for prompt assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
} 