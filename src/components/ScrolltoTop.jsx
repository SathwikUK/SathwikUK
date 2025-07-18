import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? "fixed bottom-2 right-4" : "hidden"
      } bg-cyan-900 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition duration-300`}
    >
      <FaArrowAltCircleUp className="w-6 h-6 lg:w-8 lg:h-8" />
    </button>
  );
};

export default ScrollToTopButton;
