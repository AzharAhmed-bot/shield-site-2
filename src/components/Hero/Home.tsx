// Home.tsx
import React from 'react';
// import Spline from '@splinetool/react-spline';
import design from "../../assets/design.png";
import Opportunity from './Opportunity';
import Footer from './Footer';
import ShieldSolutions from './SheildSolutions';
// import Typewriter from './TypeWrite';
// import Button from '../Button';
import Card from './Card';
import Partnership from './Partnership';
import { partnershipItems, cardContent } from '../../constants';
import Landing from "./Landing";

const Home: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex flex-col-reverse lg:flex-row min-h-full font-sans lg:pt-20">
        {/* Typewriter component */}
        <Landing/>
      </div>

      <div className="flex flex-col-reverse lg:flex-row min-h-full font-sans items-center justify-center pt-8 lg:pt-16">
        <div className="rounded-full lg:mr-16 lg:ml-16 ">
          <svg width="400" height="300" viewBox="0 0 239 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_137_146)">
            <path d="M207.465 47.0722C192.421 43.2251 177.724 38.2262 163.516 32.1236C149.537 26.3135 136.043 19.4872 123.151 11.7045L119.5 9.54169L115.915 11.7681C103.023 19.5508 89.5291 26.3771 75.5506 32.1872C61.3187 38.2713 46.5993 43.249 31.5347 47.0722L26.5556 48.2809V101.333C26.5556 186.508 116.38 218.377 117.243 218.695L119.5 219.458L121.757 218.695C122.687 218.695 212.444 186.571 212.444 101.333V48.2809L207.465 47.0722ZM199.167 101.333C199.167 171.305 132.778 200.629 119.5 205.846C106.222 200.629 39.8333 171.241 39.8333 101.333V58.1406C53.8379 54.283 67.5468 49.5007 80.8617 43.8281C94.1774 38.313 107.087 31.9372 119.5 24.7447C131.913 31.9372 144.823 38.313 158.138 43.8281C171.453 49.5007 185.162 54.283 199.167 58.1406V101.333Z" fill="#003445"/>
            </g>
            <defs>
              <clipPath id="clip0_137_146">
                <rect width="239" height="229" fill="white"/>
              </clipPath>
            </defs>
            <image className="rotate-0 transform transition duration-500 ease-in-out hover:rotate-12" href={design} width="150" height="150" x="50" y="40" />
          </svg>      
        </div>
        <div className="lg:mr-20 text-center lg:text-left">
          <h1 className="text-xl lg:text-2xl lg:mt-4 font-extrabold text-gray-900">
            SHIELD empowers youth through Design Thinking, fostering innovative entrepreneurship for social change in underserved areas.
          </h1>
        </div>
      </div>


      {/* Partnership items */}
      <div className="flex flex-col-reverse lg:mt-24 lg:bg-gray-200 lg:flex-row min-h-full font-sans items-center justify-center pt-8 lg:pt-16">
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
      {/* Shield solutions */}
      <ShieldSolutions />

      {/* Opportunity programs */}
      <Opportunity/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
