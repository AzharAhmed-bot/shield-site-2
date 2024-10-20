import { useState } from 'react';
import { cardContent } from '../../constants';
import Overlay from '../Common/Overlay';

export default function ProjectCards() {
  const [overlayData, setOverlayData] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

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

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Title floating to the left */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#003445] mb-12 text-left">Our Projects</h1>

      {/* Consistent, image-left, text-right layout */}
      <div className="space-y-12">
        {cardContent.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col lg:flex-row items-center gap-8 transition-all hover:shadow-2xl transform hover:scale-105"
          >
            {/* Image Section (always on the left) */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover rounded-xl hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Text Section (always on the right) */}
            <div className="flex flex-col justify-center w-full lg:w-1/2">
              <h2 className="text-2xl font-extrabold text-[#003445] mb-4">{program.title}</h2>
              <p className="text-lg text-gray-700 mb-6">{program.description}</p>
              <button
                className="bg-[#003445] text-white py-2 px-6 rounded-full font-semibold transition-all duration-300 hover:bg-[#004b60] hover:shadow-md w-fit text-white"
                onClick={() => handleLearnMore(program)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay Section */}
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
