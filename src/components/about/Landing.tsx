import  { useState, useEffect } from 'react';
import project1 from "../../assets/pngs/project1.jpg";
import project2 from "../../assets/pngs/project2.jpg";
import project3 from "../../assets/pngs/project3.jpg";
import { statistics } from '../../constants';
// Import other project images as needed

export default function Landing() {
  const projectImages = [project1, project2, project3]; // Array of project images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentIndex => (currentIndex + 1) % projectImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <>
    <div className="flex flex-col lg:flex-row gap-16 items-center justify-center min-h-screen px-4 lg:px-16">
      {/* Project Images */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-0 mb-6 lg:mb-0">
        <img src={projectImages[currentImageIndex]} alt={`Project ${currentImageIndex + 1}`} className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-6">
        <div className="w-full max-w-lg lg:max-w-none">
          <h1 className="lg:text-4xl text-3xl font-extrabold text-yellow-600 mb-6">
            ~ WHO WE ARE
          </h1>
          <h2 className="lg:text-5xl text-4xl mt-6 text-[#003445] mb-4">
            We help young entrepreneurs
          </h2>
          <p className="text-lg mt-6 text-gray-600">
            SHIELD empowers rural youth with skills and resources to become entrepreneurs and solve community problems, creating jobs and positive change. Join the revolution!
          </p>
          <div className="underline-animation mt-12"></div>
        </div>
      </div>
    </div>
     {/* Statistics Section (Below) */}
     <div className="w-full mt-[-40px]  mb-20 ">
        <div className="p-6  ">
          <div className="flex flex-col lg:flex-row justify-around text-center   ">
            {statistics.map((stat, index) => (
              <div key={index} className="mb-6 lg:mb-0 bg-gray-100 cursor-pointer rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:bg-gray-200">
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
