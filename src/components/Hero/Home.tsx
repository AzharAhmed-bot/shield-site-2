// Home.tsx
import React from 'react';
import Typewriter from './TypeWrite';
import Button from '../Button';
import Card from './Card';
import Partnership from './Partnership';
import { partnershipItems, cardContent } from '../../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex flex-col-reverse lg:flex-row min-h-full font-sans pt-8">
        {/* Typewriter component */}
        <div className="w-full lg:w-3/4 flex justify-center items-start py-6">
          <div className="mx-auto w-full md:ml-20 sm:ml-3 p-8">
            <h1 className="lg:text-6xl text-5xl font-extrabold text-gray-900 mb-6">
              Empowering Visionaries
            </h1>
            <Typewriter words={["A Nexus of Innovation, Entrepreneurship, and Leadership.", "A Core of Imagination, Ventures, and Vision.", "A Fusion of Inventiveness, Business Ventures, and Mentorship."]} />
            <h2 className="text-2xl mt-6 text-gray-600 mb-4">
              Transforming Ideas into Reality
            </h2>
            <Button
              name="Get Started"
              style="bg-yellow-500 mt-6 text-white py-3 px-6 rounded-xl hover:bg-yellow-800 transition duration-300 ease-in-out"
            />
            <div className="underline-animation mt-12"></div>
          </div>
        </div>
        {/* Card component */}
        <div className="w-full lg:w-1/4 flex items-start lg:mr-40 mt-[-34px]">
          <div className="w-full">
            {/* Spline component */}
          </div>
        </div>
      </div>
      {/* Partnership items */}
      <div className="flex flex-col-reverse bg-gray-200 lg:flex-row min-h-full font-sans items-center justify-center pt-8 lg:pt-16">
        {partnershipItems.map((partner, index) => (
          <Partnership key={index} {...partner} />
        ))}
      </div>
      {/* Project items */}
      <div className="flex flex-wrap mt-[-20px] gap-x-4 gap-y-10 items-center justify-center m-8">
        {cardContent.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
