import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8">Privacy Policy</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                At Pro Plumbing, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Contact us through our website</li>
                <li>Schedule a service appointment</li>
                <li>Sign up for our newsletter</li>
                <li>Create an account on our website</li>
              </ul>
              <p>
                The personal information we collect may include your name, email address, phone number, address, and any other information you provide to us.
              </p>
              
              <h2>How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including to:
              </p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and complete transactions</li>
                <li>Send you service-related information</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
              
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              
              <h2>Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul>
                <li>To facilitate our service</li>
                <li>To provide the service on our behalf</li>
                <li>To perform service-related services</li>
                <li>To assist us in analyzing how our service is used</li>
              </ul>
              <p>
                These third parties may have access to your personal information to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this page.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>By email: info@proplumbing.com</li>
                <li>By phone: (123) 456-7890</li>
                <li>By mail: 123 Plumbing Way, Anytown, USA 12345</li>
              </ul>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
                Last updated: May 1, 2023
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 