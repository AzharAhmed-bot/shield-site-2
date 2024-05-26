import Button from "./Button";
import design from "../assets/design.png";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";


const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "A Nexus of Innovation, Entrepreneurship, and Leadership.",
    "A Core of Imagination, Ventures, and Vision.",
    "A Fusion of Inventiveness, Business Ventures, and Mentorship."
  ];

  function type() {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;
    setText((current) => currentWord.substring(0, current.length - shouldDelete));

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text]);

  return (
    <div className="bg-gray-100">
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-gray-100 font-sans pt-8">
      <div className="w-full lg:w-3/4 flex justify-center items-start py-6">
        <div className="mx-auto w-full md:ml-20 sm:ml-3 p-8">
          <h1 className="lg:text-6xl text-5xl font-extrabold text-gray-900 mb-6">
            Empowering Visionaries
          </h1>
          <h2 className="text-3xl text-gray-700 mb-6 transition-all duration-500 ease-in-out">
            {text}<span className="blink-cursor">|</span>
          </h2>
          <h2 className="text-2xl mt-6 text-gray-600 mb-4">
            Transforming Ideas into Reality
          </h2>
          <Button
            name="Get Started"
            style="bg-yellow-700 mt-6 text-white py-3 px-6 rounded-xl hover:bg-red-800 transition duration-300 ease-in-out"
          />
          <div className="underline-animation mt-12"></div>
        </div>
      </div>
      <div className="w-76  lg:w-1/4 flex items-start lg:mr-40 mt-[-34px]">
      <Spline scene="https://prod.spline.design/uasDawWwGrRkfoZE/scene.splinecode"></Spline>
       
      </div>
    </div>
    <div className="">
      <div className="w-40">
       {/* <Spline scene="https://prod.spline.design/J4WFt14a27pf2eZr/scene.splinecode"></Spline> */}
      </div>
        <h1 className="lg:text-2xl text-xl font-extrabold text-gray-900 mb-6">
          SHIELD empowers youth through Design Thinking, fostering innovative entrepreneurship for social change in underserved areas
        </h1>
    </div>
    </div>
  );
};

export default Home;
