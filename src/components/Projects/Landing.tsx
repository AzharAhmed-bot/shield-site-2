import heroProject from "../../assets/pngs/heroProjects.png";



export default function Landing() {
  

const content = {
        title: "~ OUR INITIATIVES",
        description: "Discover our ongoing projects",
        paragraph: "SHIELD empowers rural youth by equipping them with entrepreneurial skills and resources to tackle community challenges, fostering job creation and transformative change. Join us in driving this movement!"
};
      
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center min-h-screen px-4 lg:px-16">
      {/* 3D Model */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-0 mb-6 lg:mb-0">
        <div className="overflow-hidden">
          <img className="rounded-lg shadow-lg " src={heroProject} alt="" />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-6">
        <div className="w-full max-w-lg lg:max-w-none">
          <h1 className="lg:text-4xl text-3xl font-extrabold text-yellow-600 mb-6">
            {content.title}
          </h1>
          <h2 className="lg:text-5xl text-4xl mt-6 text-[#003445] mb-4">
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
