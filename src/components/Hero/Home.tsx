// Home.tsx
import React from 'react';
import Opportunity from './Opportunity';
import Footer from '../Common/Footer';
import ShieldSolutions from './SheildSolutions';
import CompanyDescription from './CompanyDescription';
import Card from './Card';
import Partnership from './Partnership';
import { partnershipItems, cardContent } from '../../constants';
import Landing from "./Landing";

const Home: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex flex-col-reverse lg:flex-row min-h-full font-sans lg:pt-20">
        {/* First view port */}
        <Landing/>
      </div>

      {/* Company descrption */}
      <CompanyDescription/>
    


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
