import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '../Common/Footer';
import project1 from "../../assets/pngs/project1.jpg";
import project2 from "../../assets/pngs/project2.jpg";
import project3 from "../../assets/pngs/project3.jpg";
import project4 from "../../assets/pngs/project4.jpg";
import Testimonials from "./Testimonials";
import ShieldSolutions from './SheildSolutions';
import CompanyDescription from './CompanyDescription';
import Opportunity from "./Opportunity";
import Card from './Card';
import PartnershipItem from './Partnership';
import FaqSection from './FaqSection';
import Landing from "./Landing";
import { partnershipItems, cardContent } from '../../constants';

const images = [project1, project2, project3, project4];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <div className="relative flex flex-col-reverse lg:flex-row min-h-screen font-sans lg:pt-20">
        {/* Background image */}
        <div
          ref={ref}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            inView ? 'opacity-100' : 'opacity-40'
          }`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>
        {/* Colored overlay with opacity */}
        <div className="absolute inset-0 bg-[#003445] opacity-70"></div>
        {/* First viewport content */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full h-full">
          <Landing />
        </div>
      </div>

      {/* Company description */}
      <CompanyDescription />

      

      {/* Project items */}
      <div className="flex flex-wrap mt-12 gap-x-4 gap-y-10 items-center justify-center m-8">
        {cardContent.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Shield solutions */}
      <ShieldSolutions />

      {/* Testimonials */}
      <Testimonials />

      <Opportunity/>

      <FaqSection/>

      {/* Partnership items */}
      <div className="flex flex-col lg:mt-24 mt-12  min-h-full font-sans items-center justify-center pt-8 lg:pt-16">
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8 p-4 lg:p-0">
          {partnershipItems.map((partner, index) => (
            <PartnershipItem key={index} image={partner.image} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
