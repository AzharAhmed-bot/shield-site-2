import Typewrite from "./TypeWrite";
import { typewriterWords, statistics } from "../../constants";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function Landing() {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate("/payment");
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto flex flex-col items-center">
      {/* Typewriter Section */}
      <div className="w-full p-8 lg:mt-0 mt-[-60px] flex flex-col items-center">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Empowering Visionaries
        </h1>
        <Typewrite words={typewriterWords} />
        <h2 className="text-2xl mt-6 text-gray-200 mb-4">
          Transforming Ideas into Reality
        </h2>
        <Button
          name="Donate now!"
          style="bg-yellow-500 mt-6 text-white text-lg font-bold py-3 px-6 rounded-xl hover:bg-yellow-700 transition duration-300 ease-in-out"
          onClick={handleDonate}
        />
        <div className="underline-animation mt-12"></div>
      </div>
      
      {/* Statistics Section */}
      <div className="w-full mb-12 mt-[-30px] p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row justify-around text-center text-white">
          {statistics.map((stat, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
