// Card.tsx
import React, { useState } from 'react';
import Button from '../Common/Button';
import Overlay from '../Common/Overlay';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleReadMore = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className="relative flex w-64 h-auto flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
        <img className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600" src={image} alt="Projects" />
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Button
            name="Read More"
            style="bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleReadMore}
          />
        </div>
      </div>
      {showOverlay && (
        <Overlay
          onClose={handleCloseOverlay}
          image={image}
          title={title}
          description={description}
        />
      )}
    </>
  );
};

export default Card;
