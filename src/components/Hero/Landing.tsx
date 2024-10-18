import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewrite from './TypeWrite';
import Button from '../Common/Button';
import VideoOverlay from '../Common/VideoOverlay';
import project1 from "../../assets/pngs/project1.jpg";
import project2 from "../../assets/pngs/project2.jpg";
import project3 from "../../assets/pngs/project3.jpg";
import project4 from "../../assets/pngs/project4.jpg";

const images = [project1, project2, project3, project4];

export default function Landing() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Background image with subtle zoom effect */}
      <div
        ref={ref}
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out ${
          inView ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>

      {/* Dark overlay with slight gradient */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white space-y-8 px-6">
        <h1 className="text-6xl font-bold tracking-tight leading-tight mb-4">
          Redefining Creativity
        </h1>
        <div className="text-2xl font-light mb-6">
          <Typewrite words={["Imagine", "Design", "Build"]} />
        </div>
        <h2 className="text-lg font-light text-gray-300 mb-8">
          Bringing Your Ideas to Life with Cutting-Edge Solutions
        </h2>
        <Button
          name="Discover More"
          style="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:border hover:border-yellow-600 hover:text-white"
          onClick={handleVideoOpen}
        />

        {/* Elegant line separator */}
        <div className="w-20 h-1 bg-white mx-auto mt-12"></div>
      </div>

      {/* Video Overlay */}
      {isVideoOpen && (
        <VideoOverlay
          url="https://youtu.be/9ucCZ4TzST0"
          onClose={handleVideoClose}
        />
      )}
    </div>
  );
}
