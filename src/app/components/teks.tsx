import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const text = "Kevin Wijaya";
  return (
    <p className="relative z-10 flex text-7xl hover:text-blue-200 shadow-blue-900 text-shadow-xl">
      {Array.from(text).map((letter, index) => (
        <span
          key={index}
          className={`inline-block transform transition-opacity duration-500 ease-in-out ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </p>
  );
};

export default AnimatedText;
