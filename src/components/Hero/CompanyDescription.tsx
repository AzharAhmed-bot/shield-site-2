import lightBulb from "../../assets/pngs/lightbulb.jpg";
import { useEffect, useState } from "react";

export default function CompanyDescription() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = document.getElementById('company-section');
      if (testimonialSection) {
        const top = testimonialSection.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight);
      }
    };

    // Listen to scroll events for visibility
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="company-section"
      className={`flex flex-col lg:flex-row mt-10 lg:mt-20 lg:h-80 lg:items-center lg:justify-center transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ minHeight: '80vh', justifyContent: 'center' }}
    >
      <div className="m-4 flex justify-center items-center lg:w-1/2 transition-transform duration-500 ease-in-out transform">
        <img
          src={lightBulb}
          alt="Light Bulb"
          className="w-48 h-48 lg:w-96 lg:h-96 object-cover rounded-lg shadow-xl border-4 border-[#003445]"
        />
      </div>
      <div className="p-4 lg:mr-20 lg:w-1/2 w-full transition-opacity duration-500 ease-in-out transform">
        <h2 className="text-3xl lg:text-5xl mt-16 lg:mt-0 font-extrabold text-[#003445]">
          ~ What We Do
        </h2>
        <h3 className="text-2xl lg:text-4xl mt-4 lg:mt-2 font-semibold text-[#003445]">
          Company Overview
        </h3>
        <p className="text-lg lg:text-lg mt-6 lg:mt-8 leading-relaxed text-[#003445]">
          SHIELD leverages Design Thinking and digital transformation to empower the youth, businesses, and community organizations to acquire the skills, knowledge, and competence required to either pursue entrepreneurship or earn employment.
        </p>
        <p className="text-lg lg:text-lg mt-6 lg:mt-8 leading-relaxed text-[#003445]">
          Our goal is to create design thinkers and entrepreneurs who can collaborate to solve social problems experienced in the slums and rural areas and in the process inspire even more fellow youths to join the movement thus bringing about a ripple effect of positive change in their communities.
        </p>
      </div>
    </div>
  );
}
