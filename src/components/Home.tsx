import Button from "./Button";
import design from "../assets/design.png";
import { useState, useEffect } from "react";

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
    // Create the new text
    setText((current) => currentWord.substring(0, current.length - shouldDelete));
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }
  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 150 : 250);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-gray-100 font-sans">
      <div className="w-3/4 flex justify-center  py-12">
        <div className="mx-auto w-full   md:ml-5 sm:ml-3 p-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Empowering Visionaries
          </h1>
          <h2 className="text-2xl text-gray-700 mb-6">{text}|</h2>
          <Button
            name="Get started"
            style="bg-yellow-700 text-white py-3 px-6 rounded-xl hover:bg-red-800"
          />
        </div>
      </div>
      <div className="lg:w-1/4 flex justify-center  py-8 mr-20">
        <img src={design} alt="" className="w-auto rotate-12 h-96" />
      </div>
    </div>
  );
};

export default Home;
