import React from 'react';

interface PartnershipItemProps {
  image: string;
}

const PartnershipItem: React.FC<PartnershipItemProps> = ({ image }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 lg:mb-16 mb-12 flex flex-col items-center justify-start">
      <img className="h-12 w-36 object-contain mb-4" src={image} alt="Partner" />
     
    </div>
  );
};

export default PartnershipItem;
