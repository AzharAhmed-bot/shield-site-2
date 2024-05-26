import Button from "./Button";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import design from "../assets/design.png";

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

  const cardContent = [
    {
      title: "Tailwind card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."
    },
    {
      title: "Tailwind card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."
    },
    {
      title: "Tailwind card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."
    },
    {
      title: "Tailwind card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."
    }
  ];
  const partnershipItems = [
    {
      name: "Partner 1",
      description: "Description of Partner 1."
    },
    {
      name: "Partner 2",
      description: "Description of Partner 2."
    },
    {
      name: "Partner 3",
      description: "Description of Partner 3."
    },
    // Add more partnership items as needed
  ];
  

  return (
    <div className="bg-white w-full">
      <div className="flex flex-col-reverse lg:flex-row min-h-full  font-sans pt-8">
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
              style="bg-yellow-500 mt-6 text-white py-3 px-6 rounded-xl hover:bg-yellow-800 transition duration-300 ease-in-out"
            />
            <div className="underline-animation mt-12"></div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex items-start lg:mr-40 mt-[-34px]">
          <div className="w-full">
            <Spline scene="https://prod.spline.design/uasDawWwGrRkfoZE/scene.splinecode" style={{ width: '100%' }}></Spline>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row min-h-full font-sans items-center justify-center pt-8 lg:pt-16">
        <div className="rounded-full lg:mr-16 lg:ml-16 ">
          <svg width="400" height="300" viewBox="0 0 239 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_137_146)">
            <path d="M207.465 47.0722C192.421 43.2251 177.724 38.2262 163.516 32.1236C149.537 26.3135 136.043 19.4872 123.151 11.7045L119.5 9.54169L115.915 11.7681C103.023 19.5508 89.5291 26.3771 75.5506 32.1872C61.3187 38.2713 46.5993 43.249 31.5347 47.0722L26.5556 48.2809V101.333C26.5556 186.508 116.38 218.377 117.243 218.695L119.5 219.458L121.757 218.695C122.687 218.695 212.444 186.571 212.444 101.333V48.2809L207.465 47.0722ZM199.167 101.333C199.167 171.305 132.778 200.629 119.5 205.846C106.222 200.629 39.8333 171.241 39.8333 101.333V58.1406C53.8379 54.283 67.5468 49.5007 80.8617 43.8281C94.1774 38.313 107.087 31.9372 119.5 24.7447C131.913 31.9372 144.823 38.313 158.138 43.8281C171.453 49.5007 185.162 54.283 199.167 58.1406V101.333Z" fill="#FFB74D"/>
            </g>
            <defs>
              <clipPath id="clip0_137_146">
                <rect width="239" height="229" fill="white"/>
              </clipPath>
            </defs>
            <image className="rotate-0 transform transition duration-500 ease-in-out hover:rotate-12" href={design} width="150" height="150" x="50" y="40" />
          </svg>      
        </div>
        <div className="lg:mr-20 text-center lg:text-left">
          <h1 className="text-xl lg:text-2xl lg:mt-4 font-extrabold text-gray-900">
            SHIELD empowers youth through Design Thinking, fostering innovative entrepreneurship for social change in underserved areas.
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-start  justify-between mt-32  bg-black h-60 w-full overflow-x-auto">
        {/* Partnership items */}
        {partnershipItems.map((partner, index) => (
          <div key={index} className="flex items-center justify-center mt-6 m-20">
            <div className="p-4 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap mt-[-20px] gap-x-4 m-8">
        {cardContent.map((card, index) => (
          <div key={index} className="relative flex w-80 flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {card.title}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {card.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Home;
