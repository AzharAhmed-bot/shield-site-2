import ThreeDModel from "../Common/ThreeDModel";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function CompanyDescription() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  // State to manage the animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const description =
    "SHIELD empowers youth through Design Thinking, fostering innovative entrepreneurship for social change in underserved areas.";

  return (
    <div
      ref={ref}
      className="flex flex-col-reverse lg:flex-row lg:h-80 font-sans items-center justify-center"
    >
      <div
        className={`rounded-full lg:mr-16 lg:mt-12 lg:ml-16 ${
          isVisible ? "slide-in" : ""
        }`}
      >
        {/* <ThreeDModel myScene="https://prod.spline.design/uasDawWwGrRkfoZE/scene.splinecode"/> */}
      </div>
      <div className="lg:mr-20 text-center lg:text-left">

        <h1 className="text-xl lg:text-2xl mt-16 lg:mt-4 font-extrabold text-gray-900">
          {description.split(" ").map((word, index) => (
            <span
              key={index}
              className={`relative ml-1 ${
                isVisible ? "animate-slide" : ""
              }`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
