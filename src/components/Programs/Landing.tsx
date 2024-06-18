
import { testimonials } from '../../constants';

const Testimonials = () => {
  return (
    <div className="testimonial-section bg-gradient-to-r from-blue-400 to-purple-500 py-16 mt-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-full h-24 w-24 object-cover" />
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
