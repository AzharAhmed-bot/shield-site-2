import design from "../../assets/design.png";
import ThreeDModel from "../Common/ThreeDModel";


export default function CompanyDescription(){
    const description="SHIELD empowers youth through Design Thinking, fostering innovative entrepreneurship for social change in underserved areas.";
    return(
        <div className="flex flex-col-reverse lg:flex-row lg:h-80  font-sans items-center justify-center">
        <div className="rounded-full lg:mr-16 lg:mt-12 lg:ml-16 ">
          {/* <ThreeDModel myScene="https://prod.spline.design/uasDawWwGrRkfoZE/scene.splinecode"/> */}
        </div>
        <div className="lg:mr-20 text-center lg:text-left">
          <h1 className="text-xl lg:text-2xl mt-16 lg:mt-4 font-extrabold text-gray-900">
            {description}
          </h1>
        </div>
      </div>
    )
}