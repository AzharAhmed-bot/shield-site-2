
import ThreeDModel from "../Common/ThreeDModel";


export default function Landing() {
  

  const content = {
    title: "~ WHAT WE OFFER",
    description: "We offer digital certifications",
    paragraph: "SHIELD empowers rural youth with skills and resources to become entrepreneurs and solve community problems, creating jobs and positive change. Join the revolution!"
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16">
      {/* 3D Model */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-0 mb-6 lg:mb-0">
        <div className="overflow-hidden">
          {/* <ThreeDModel myScene="https://prod.spline.design/GTWRVOEWODUHp91A/scene.splinecode" /> */}
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-6">
        <div className="w-full max-w-lg lg:max-w-none">
          <h1 className="lg:text-4xl text-3xl font-extrabold text-yellow-600 mb-6">
            {content.title}
          </h1>
          <h2 className="lg:text-5xl text-4xl mt-6 text-gray-800 mb-4">
            {content.description}
          </h2>
          <p className="text-lg mt-6 text-gray-600">
            {content.paragraph}
          </p>
          <div className="underline-animation mt-12"></div>
        </div>
      </div>
    </div>
  );
}
