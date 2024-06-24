import React, { useEffect, useState } from 'react';

interface PartnershipItemProps {
  image: string;
}

const PartnershipItem: React.FC<PartnershipItemProps> = ({ image }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const partnershipItem = document.getElementById('partnership-item');
      if (partnershipItem) {
        const top = partnershipItem.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight * 0.75); // Adjust threshold as needed
      }
    };

    // Listen to scroll events for visibility
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="partnership-item"
      className={`bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md p-4 lg:mb-16 mb-12 flex flex-col items-center justify-start ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-500 ease-in-out`}
    >
      <img className="h-16 w-40 object-contain mb-4" src={image} alt="Partner" />
    </div>
  );
};

export default PartnershipItem;
