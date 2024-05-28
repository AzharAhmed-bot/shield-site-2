import React from 'react';

interface TeamCardProp{
    image:string,
    name:string,
    title:string
}

const TeamCard = ({ image, name, title }:TeamCardProp) => {
  return (
    <div className="bg-black text-white rounded-lg p-4 m-2 shadow-md max-w-xs">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <p className="text-center text-gray-400">{title}</p>
      <div className="flex justify-center mt-4">
        <a href="#" className="mx-2 text-gray-400 hover:text-white">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="mx-2 text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="mx-2 text-gray-400 hover:text-white">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="mx-2 text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
