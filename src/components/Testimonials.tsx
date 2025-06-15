import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Primer',
    location: 'San Antonio',
    quote: 'Stop wasting time and money on other plumbing company\'s. AU Plumbing is the best in San Antonio hands down. Bravo to Andrew and his team for helping me and fix our family\'s water heater issues.',
    rating: 5,
    image: 'https://via.placeholder.com/100x100/e2e8f0/1e3a8a?text=J'
  },
  {
    id: 2,
    name: 'Raquel Navarijo',
    location: 'San Antonio',
    quote: 'A.U. Plumbing LLC\'s plumbers demonstrated excellent responsiveness, reliability, and friendliness, coupled with impressive speed and expertise in resolving my issue of low water pressure. The crew was very considerate of ensuring they kept all areas clean, and I appreciated that Andrew never tried to upsell expensive devices or treatments. I\'d highly recommend this top-notch, professional plumbing contractor.',
    rating: 5,
    image: 'https://via.placeholder.com/100x100/e2e8f0/1e3a8a?text=R'
  },
  {
    id: 3,
    name: 'Keith Parks',
    location: 'San Antonio',
    quote: 'Andrew and the team were able to facilitate our needs in filtration and softening. Our newly purchased mid-century home required infrastructure updating and maintenance. AU was able address those issues with timely cost effective solutions.',
    rating: 4,
    image: 'https://via.placeholder.com/100x100/e2e8f0/1e3a8a?text=K'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={`${i < rating ? 'text-amber-400' : 'text-gray-300'} w-5 h-5`} 
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it - hear from our satisfied A.U. Plumbing LLC customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 dark:text-blue-200">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              
              <StarRating rating={testimonial.rating} />
              
              <p className="mt-4 text-gray-700 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-4">
            Exceptional 5.0/5 rating on Thumbtack
          </p>
          <div className="flex gap-4">
            <div className="flex items-center">
              <Image 
                src="https://via.placeholder.com/100x40/e2e8f0/1e3a8a?text=Google"
                alt="Google Reviews" 
                width={100} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex items-center">
              <a href="https://www.yelp.com/biz/au-plumbing-san-antonio" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="https://via.placeholder.com/80x40/e2e8f0/1e3a8a?text=Yelp"
                  alt="Yelp Reviews" 
                  width={80} 
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://www.thumbtack.com/tx/san-antonio/septic-system-installation-or-replacement/a-u-plumbing-llc/service" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="https://via.placeholder.com/80x40/e2e8f0/1e3a8a?text=Thumbtack"
                  alt="Thumbtack Reviews" 
                  width={80} 
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 