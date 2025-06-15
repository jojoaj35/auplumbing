import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8">Terms of Service</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Welcome to Pro Plumbing. By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
              </p>
              
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using our website and services, you agree to these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
              
              <h2>Services</h2>
              <p>
                Pro Plumbing provides plumbing services for residential and commercial properties. Our services include but are not limited to emergency repairs, drain cleaning, water heater service, toilet repairs, faucet repairs, and other plumbing-related services.
              </p>
              <p>
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              
              <h2>Scheduling and Appointments</h2>
              <p>
                When scheduling an appointment with Pro Plumbing, you agree to provide accurate information regarding the service needed and the property where the service will be performed.
              </p>
              <p>
                If you need to cancel or reschedule an appointment, please provide at least 24 hours' notice. Late cancellations or no-shows may result in a cancellation fee.
              </p>
              
              <h2>Pricing and Payment</h2>
              <p>
                Pricing for our services will be provided upfront before work begins. The final price may vary based on the actual work performed, materials used, and any unforeseen circumstances discovered during the service.
              </p>
              <p>
                Payment is due upon completion of the service unless otherwise agreed upon in writing. We accept cash, checks, and major credit cards.
              </p>
              
              <h2>Warranties and Guarantees</h2>
              <p>
                Pro Plumbing provides warranties on our labor and the parts we install. The specific warranty terms depend on the service provided and will be clearly explained before the service is performed.
              </p>
              <p>
                If you are not satisfied with our work, please contact us within 30 days, and we will make reasonable efforts to resolve the issue.
              </p>
              
              <h2>Property Access and Condition</h2>
              <p>
                By scheduling a service, you agree to provide our technicians with reasonable access to the areas of your property where the work will be performed. You also agree to ensure the work area is reasonably clean and safe.
              </p>
              <p>
                Pro Plumbing is not responsible for any pre-existing conditions or issues unrelated to the specific service requested.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Pro Plumbing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of our services.
              </p>
              <p>
                Our liability for any claim arising out of or relating to our services shall not exceed the amount you paid for the specific service that is the subject of the claim.
              </p>
              
              <h2>Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the state where our business is registered, without regard to its conflict of law provisions.
              </p>
              
              <h2>Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify customers of any significant changes by posting the new Terms of Service on this page.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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