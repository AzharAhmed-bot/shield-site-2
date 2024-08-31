import React, { useState } from 'react';
import Typewrite from "./TypeWrite";
import { typewriterWords } from "../../constants";
import { useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import VideoOverlay from '../Common/VideoOverlay';

export default function Landing() {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleDonate = () => {
    navigate("/payment");
  };

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto flex flex-col items-center">
      {/* Typewriter Section */}
      <div className="w-full p-8 flex flex-col text-center items-center">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Empowering Visionaries
        </h1>
        <Typewrite words={typewriterWords} />
        <h2 className="text-2xl mt-6 text-gray-200 mb-4">
          Transforming Ideas into Reality
        </h2>
        <Button
          name="What we do?"
          style="bg-yellow-500 mt-6 text-white text-lg font-bold py-3 px-6 rounded-xl hover:bg-yellow-700 transition duration-300 ease-in-out"
          onClick={handleVideoOpen}
        />
        <div className="underline-animation mt-12"></div>
      </div>

      {/* Video Overlay */}
      {isVideoOpen && (
        <VideoOverlay url="https://youtu.be/9ucCZ4TzST0" onClose={handleVideoClose} />
      )}
    </div>
  );
}
