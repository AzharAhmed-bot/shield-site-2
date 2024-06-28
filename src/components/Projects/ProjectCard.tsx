import { useState } from 'react';
import Button from '../Common/Button';
import { cardContent } from '../../constants';
import Overlay from '../Common/Overlay';

export default function ProjectCards() {
  const [overlayData, setOverlayData] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLearnMore = (program: any) => {
    setOverlayData({
      image: program.image,
      title: program.title,
      description: program.moreInfo,
    });
  };

  const handleCloseOverlay = () => {
    setOverlayData(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === cardContent.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? cardContent.length - 1 : prevSlide - 1));
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-5xl font-extrabold text-[#003445] mb-4">Our Projects</h1>
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

      {cardContent.map((program, index) => (
        <div
          key={index}
          className={`h-auto w-fix  bg-gray-100 rounded-3xl text-[#003445] font-sans p-4 flex lg:flex-row flex-col items-center justify-center gap-8
            ${index !== currentSlide ? 'hidden' : 'hover:bg-gray-200 hover:shadow-2xl hover:shadow-[#003445] transition-shadow'}`}
        >
          <div className="rounded-2xl w-2/3 h-fix overflow-hidden">
            <img className="lg:h-80 h-auto rounded-lg shadow-lg shadow-[#003445]" src={program.image} alt="" />
          </div>
          <div className="flex flex-col w-3/4 gap-1">
            <p className="font-extrabold text-lg">{program.title}</p>
            <p className="text-md lg:text-start text-start">{program.description}</p>
            <Button
              name="See more"
              style="bg-[#003445] font-extrabold py-2 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 w-fit text-white transition-colors"
              onClick={() => handleLearnMore(program)}
            />
          </div>
        </div>
      ))}

      {overlayData && (
        <Overlay
          onClose={handleCloseOverlay}
          image={overlayData.image}
          title={overlayData.title}
          description={overlayData.description}
        />
      )}
    </div>
  );
}
