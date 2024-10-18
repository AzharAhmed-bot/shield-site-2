import lightBulb from "../../assets/pngs/lightbulb.jpg";
import { useEffect, useState } from "react";

export default function CompanyDescription() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('company-section');
      if (section) {
        const top = section.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 100);
      }
    };

    // Add scroll event listener for visibility
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="company-section"
      className={`flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between transition-all duration-1000 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ minHeight: '80vh' }}
    >
      {/* Image Section */}
      <div className="flex justify-center items-center lg:w-1/2 p-6 transition-transform duration-1000 ease-in-out transform">
        <img
          src={lightBulb}
          alt="Light Bulb"
          className="mt-0 lg:mt-12 w-48 h-48 lg:w-96 lg:h-96 object-cover rounded-lg shadow-2xl border-4 border-yellow-600 transition-all duration-500 ease-in-out hover:scale-105 hover:border-yellow-700"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full p-6 lg:px-12 lg:py-16 transition-opacity duration-1000 ease-in-out">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">
         ~ What We Do
        </h2>
        <h3 className="text-2xl lg:text-4xl font-semibold text-gray-700 mb-4">
          Company Overview
        </h3>
        <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
          At SHIELD, we leverage Design Thinking and digital transformation to empower youth, businesses, and communities to gain the skills and knowledge needed for entrepreneurship or employment.
        </p>
        <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
          Our mission is to inspire a new generation of entrepreneurs and problem-solvers, particularly in underrepresented communities. We aim to foster innovation and collaboration that can drive positive social impact.
        </p>
      </div>
    </div>
  );
}
