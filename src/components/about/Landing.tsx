import React, { useState, useEffect } from 'react';
import project1 from "../../assets/pngs/project1.jpg";
import project2 from "../../assets/pngs/project2.jpg";
import project3 from "../../assets/pngs/project3.jpg";
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
          <h2 className="lg:text-5xl text-4xl mt-6 text-gray-800 mb-4">
            We help young entrepreneurs
          </h2>
          <p className="text-lg mt-6 text-gray-600">
            SHIELD empowers rural youth with skills and resources to become entrepreneurs and solve community problems, creating jobs and positive change. Join the revolution!
          </p>
          <div className="underline-animation mt-12"></div>
        </div>
      </div>
    </div>
  );
}
