import React, { useState, useEffect } from 'react';


interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const cardSection=document.getElementById('card-section');
      if(cardSection){
        const top = cardSection?.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight);
      }
      
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <>
      <div
        id="card-section"
        className={`relative flex w-64 h-auto flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <img
          className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
          src={image}
          alt="Projects"
        />
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
      </div>
     
    </>
  );
};

export default Card;
