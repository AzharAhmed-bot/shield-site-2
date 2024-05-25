import Button from "./Button";
import ThreeD from "./ThreeD";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-gray-100 font-sans">
      <div className="flex flex-col mt-28 justify-center items-start p-8 lg:w-1/2">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Empowering Visionaries
        </h1>
        <h2 className="text-2xl text-gray-700 mb-6">
          A Nexus of Innovation, Entrepreneurship, and Leadership.
        </h2>
        <Button
          name="Get started"
          style="bg-yellow-700 text-white py-3 px-6 rounded hover:bg-red-800"
        />
      </div>
      <div className="lg:w-1/2 h-96 lg:h-full">
        <Spline scene="https://my.spline.design/safeguardmodel-1989b3876ca76131295f52c10ccf16fe/" />
      </div>
    </div>
  );
};

export default Home;
