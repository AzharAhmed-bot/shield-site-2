
import { useState } from 'react';
import { partnersData } from '../../constants';


export default function PartnerCards() {
 

  const [currentSlide, setCurrentSlide] = useState(0);

  

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === partnersData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? partnersData.length - 1 : prevSlide - 1));
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-5xl font-extrabold text-[#003445] mb-4">Our Partners</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-white bg-gray-900 rounded-full py-3 px-6 sm:px-8 lg:px-10 hover:bg-gray-700 focus:outline-none"
          onClick={prevSlide}
        >
          Previous
        </button>
        <button
          className="text-white bg-gray-900 rounded-full py-3 px-6 sm:px-8 lg:px-10 hover:bg-gray-700 focus:outline-none"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>

      {partnersData.map((program, index) => (
        <div
          key={index}
          className={`h-auto w-fix  bg-gray-100 rounded-3xl text-[#003445] font-sans p-4 flex lg:flex-row flex-col items-center justify-center gap-8
            ${index !== currentSlide ? 'hidden' : 'hover:bg-gray-200 hover:shadow-2xl hover:shadow-[#003445] transition-shadow'}`}
        >
          <div className="rounded-2xl w-2/3 h-fix overflow-hidden">
            <img className="lg:h-64 h-auto" src={program.image} alt="" />
          </div>
          <div className="flex flex-col w-3/4 gap-1">
            <p className="font-extrabold text-lg">{program.title}</p>
            <p className="text-sm lg:text-start text-center">{program.description}</p>
          </div>
        </div>
      ))}

    </div>
  );
}
