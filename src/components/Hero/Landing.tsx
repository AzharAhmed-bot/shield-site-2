import React , { Suspense} from "react";
import Typewrite from "./TypeWrite";
import { typewriterWords } from "../../constants";
import Button from "../Button";
const Spline = React.lazy(() => import('@splinetool/react-spline'));



export default function Landing() {


  return (
    <>
      {/* Typewriter component */}
      <div className="w-full lg:w-3/4 flex justify-center items-start py-6">
        <div className="mx-auto w-full md:ml-20 sm:ml-3 p-8">
          <h1 className="lg:text-6xl text-5xl font-extrabold text-gray-900 mb-6">
            Empowering Visionaries
          </h1>
          <Typewrite words={typewriterWords} />
          <h2 className="text-2xl mt-6 text-gray-600 mb-4">
            Transforming Ideas into Reality
          </h2>
          <Button
            name="Get Started"
            style="bg-yellow-500 mt-6 text-white py-3 px-6 rounded-xl hover:bg-yellow-800 transition duration-300 ease-in-out"
          />
          <div className="underline-animation mt-12"></div>
        </div>
      </div>

      {/* Card component */}
      <div className="w-full lg:w-1/4 flex items-start lg:mr-40 mt-[-34px]">
        <div>
          {/* Spline component */}
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              scene="https://prod.spline.design/uasDawWwGrRkfoZE/scene.splinecode"
            />
          </Suspense>
        
        </div>
      </div>
    </>
  );
}
