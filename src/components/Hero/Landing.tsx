import Typewrite from "./TypeWrite";
import { typewriterWords } from "../../constants";
import ThreeDModel from "../Common/ThreeDModel";
import Button from "../Button";




export default function Landing() {


  return (
    <>
      {/* Typewriter component */}
      <div className="w-full lg:w-3/4 flex justify-center items-start py-6">
        <div className="mx-auto w-full md:ml-20 sm:ml-3 p-8 lg:mt-0 mt-[-60px]">
          <h1 className="lg:text-6xl text-5xl font-extrabold text-white mb-6">
            Empowering Visionaries
          </h1>
          <Typewrite words={typewriterWords} />
          <h2 className="text-2xl mt-6 text-gray-200 mb-4">
            Transforming Ideas into Reality
          </h2>
          <Button
            name="Donate now!"
            style="bg-yellow-500 mt-6 text-white text-lg font-bold py-3 px-6 rounded-xl hover:bg-yellow-800 transition duration-300 ease-in-out"
          />
          <div className="underline-animation mt-12"></div>
        </div>
      </div>

      {/* Spline component */}
      {/* <div className="w-full lg:w-1/4 flex items-center justify-center lg:mr-40  mt-[-34px]">
        <div>    
          
        
        </div>
      </div> */}
    </>
  );
}
