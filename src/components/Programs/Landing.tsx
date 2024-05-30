import ThreeDModel from "../Common/ThreeDModel";

export default function Landing() {

  const content={
    title:" ~ WHAT WE OFFER",
    description:"We offer digital certifications",
    paragraph:" SHIELD empowers rural youth with skills and resources to become entrepreneurs and solve community problems, creating jobs and positive change. Join the revolution!"
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16">
        
        {/* 3D Model */}
        <div className="w-auto lg:ml-0  lg:w-1/2 flex justify-center  lg:justify-start  lg:mt-0">
          <div className="w-full lg:w-auto">
            {/* <ThreeDModel myScene="https://prod.spline.design/GTWRVOEWODUHp91A/scene.splinecode" /> */}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start  text-center lg:text-left py-6">
          <div className="w-full max-w-lg lg:max-w-none">
            <h1 className="lg:text-2xl text-1xl font-extrabold text-yellow-600 mb-6">
             {content.title}
            </h1>
            <h2 className="lg:text-2xl text-5xl  mt-6 text-gray-600 mb-4">
              {content.description}
            </h2>
            <h2 className="text-2xl mt-6 text-gray-600 mb-4">
              {content.paragraph}
            </h2>
            <div className="underline-animation mt-12"></div>
          </div>
        </div>
        
      </div>
    </>
  );
}
