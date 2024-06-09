import { courses } from "../../constants";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

export default function CourseCards() {
  const navigate=useNavigate();
  return (
    <>
      <h1 className="lg:text-5xl text-5xl lg:ml-28 ml-4 font-extrabold text-gray-900 mb-12">
        Our <br /> Courses
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 px-4 lg:px-16">
        {courses.map((course, index) => {
          const bgColor =
            (index % 4 === 0 || (index + 1) % 4 === 0)
              ? 'bg-opacity-40'
              : 'bg-opacity-100';
          return (
            <div
              key={index}
              className={`w-full lg:w-[45%] bg-[#003445] ${bgColor} text-white rounded-3xl overflow-hidden shadow-lg mb-6 flex flex-col items-center p-6`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-3xl font-extrabold mb-4 text-center">
                {course.title}
              </h2>
              <Button
                name={course.buttonText}
                // onClick={()=>navigate(course.url)}
                style="bg-white text-[#003445] py-2 px-6 rounded-xl"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
