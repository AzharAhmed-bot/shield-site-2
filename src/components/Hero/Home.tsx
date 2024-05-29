import React, { useEffect, useState } from 'react';
import Opportunity from './Opportunity';
import Footer from '../Common/Footer';
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import ShieldSolutions from './SheildSolutions';
import CompanyDescription from './CompanyDescription';
import Card from './Card';
import Partnership from './Partnership';
import { partnershipItems, cardContent } from '../../constants';
import Landing from "./Landing";

const images = [project1, project2, project3, project4];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="relative flex flex-col-reverse lg:flex-row min-h-screen font-sans lg:pt-20">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out" 
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            opacity: 1
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* First view port content */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full h-full">
          <Landing />
        </div>
      </div>

      {/* Company description */}
      <CompanyDescription />
    
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
      <Opportunity />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
