import { ChevronUpIcon } from "@heroicons/react/outline";
import React from "react";

const GoTop = () => {
  return (
    <div className="relative">
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
