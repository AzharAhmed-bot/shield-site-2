// Typewriter.tsx
import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
}

const Typewriter = ({ words }:TypewriterProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text]);

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

  return (
    <h2 className="text-3xl text-gray-200 mb-6 transition-all duration-500 ease-in-out">
      {text}<span className="blink-cursor">|</span>
    </h2>
  );
};

export default Typewriter;
