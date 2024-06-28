import programs from "../../assets/pngs/programs.png";
import { useEffect, useState } from "react";

const Opportunity = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const partnershipItem = document.getElementById('partnership-item');
      if (partnershipItem) {
        const top = partnershipItem.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight * 0.75);
      }
    };

    // Listen to scroll events for visibility
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="partnership-item"
      className={`flex flex-col lg:flex-row items-center justify-center mt-20 space-y-10 lg:space-y-0 lg:space-x-20 transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ minHeight: '80vh' }}
    >
      <div className="w-full lg:w-1/2 flex justify-center items-center lg:ml-20 transform transition-transform duration-500 ease-in-out">
        <img
          src={programs}
          alt="Programs"
          className="w-auto h-auto object-cover rounded-lg border-4 border-[#003445]"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:ml-12 lg:w-2/3 w-full transition-opacity duration-500 ease-in-out">
        <h1 className="py-6 rounded-lg text-[#003445] text-2xl lg:text-3xl font-bold">
          Opportunity Areas
        </h1>
        <p className="text-sm lg:text-xl leading-relaxed text-[#003445] ">
          The main approach to our programs will be helping startups in various sectors to integrate circular economy into their business models to increase sustainability while reducing wastage and carbon footprint.
        </p>
        <div className="text-sm lg:text-lg leading-relaxed text-[#003445] max-w-4xl">
          <p>Agriculture and food value chain</p>
          <p>E-commerce and Logistics</p>
          <p>Tourism and Mobility</p>
          <p>Waste Management</p>
          <p>Circular Economy</p>
          <p>Education</p>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
