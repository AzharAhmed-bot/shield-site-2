import React, { useEffect, useState } from 'react';
import { testimonials } from '../../constants';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = document.getElementById('testimonial-section');
      if (testimonialSection) {
        const top = testimonialSection.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight * 0.75); 
      }
    };

    // Listen to scroll events for visibility
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="testimonial-section" className="testimonial-section bg-gradient-to-br from-gray-400 to-black rounded-lg mt-10 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial bg-white rounded-lg shadow-lg p-6 flex flex-col items-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-500 ease-in-out`}
            >
              <div className="mb-4">
                <img
                  className="h-24 w-24 object-cover rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <p className="text-lg italic mb-4 text-center">"{testimonial.quote}"</p>
              <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
              <p className="text-lg text-gray-600 text-center">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
