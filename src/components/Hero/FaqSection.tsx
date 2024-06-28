import { useState } from "react";
import { faqContent } from "../../constants"; // Assuming faqContent is imported or defined elsewhere

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-6">
        {faqContent.title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {faqContent.rows.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg transition duration-300 transform hover:shadow-lg hover:bg-gray-50"
          >
            <div
              className={`flex justify-between items-center px-6 py-4 cursor-pointer ${
                activeIndex === index ? "bg-gray-200" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="font-medium text-lg text-[#003445]">{item.title}</div>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="border-t border-gray-200 px-6 py-4">
                <p className="text-gray-700">
                  {item.content.includes("http") ? (
                    <a
                      href={item.content}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003445] hover:underline"
                    >
                      Click to apply for the SHIELD program
                    </a>
                  ) : (
                    item.content
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
