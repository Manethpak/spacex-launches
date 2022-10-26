import { ChevronUpIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { filterClasses } from "utils";

const GoTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className={filterClasses(
        "relative transition-opacity delay-100 duration-150",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <button
        className="fixed z-50 bottom-10 right-10 p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition ease-in-out hover:scale-[120%] focus:ring-4 focus:ring-amber-300 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUpIcon className="w-8 h-8 text-white font-bold" />
      </button>
    </div>
  );
};

export default GoTop;
