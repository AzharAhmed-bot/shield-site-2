import React from 'react';

interface PartnershipItemProps {
  image: string;
  url: string;
}

const PartnershipItem: React.FC<PartnershipItemProps> = ({ url, image }) => {
  return (
    <div
      className="bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md p-4 lg:mb-16 mb-12 flex flex-col items-center justify-start transition-all duration-500 ease-in-out"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="h-16 w-40 object-contain mb-4" src={image} alt="Partner" />
      </a>
    </div>
  );
};

export default PartnershipItem;
