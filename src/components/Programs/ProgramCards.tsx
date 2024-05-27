import Button from "../Button";
import { programs } from "../../constants";

export default function ProgramCards() {
  return (
    <>
      <h1 className="lg:text-5xl text-5xl lg:ml-16 ml-4 font-extrabold text-gray-900 mb-6">
        Our <br /> Programs
      </h1>
      {programs.map((program, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${program.reverse ? "lg:flex-row-reverse" : ""} items-center justify-center min-h-screen px-4 lg:px-16 gap-x-10 lg:mt-[-80px]`}
        >
          {/* Program Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-0 mb-6 lg:mb-0">
            <img
              src={program.image}
              alt={program.alt}
              className="w-full h-auto lg:w-[80%] lg:h-[80%] rounded-3xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-6">
            <div className="w-full max-w-lg lg:max-w-none">
              <h1 className="lg:text-2xl text-5xl font-extrabold text-yellow-600 mb-6">
                {program.title}
              </h1>
              <h2 className="text-2xl mt-6 text-gray-600 mb-4">
                {program.description}
              </h2>
              <Button
                name="Enroll now!"
                style="bg-[#003445] py-4 px-8 rounded-2xl text-white"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
