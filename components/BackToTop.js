"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { theme } = useTheme();

  // Show the button when scrolled down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Define color styles based on the theme
  const buttonStyles =
    theme === "dark"
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white hover:bg-gray-800";

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition duration-300 ease-in-out ${buttonStyles}`}
        aria-label="Back to Top"
      >
        <ArrowUpCircleIcon className="h-8 w-8" />
      </button>
    )
  );
};

export default BackToTop;
