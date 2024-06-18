import React from 'react';
import { testimonials } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="testimonial-section bg-[#003445] mt-10 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-start text-white mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="h-24 w-24 object-cover rounded-full grayscale"
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
