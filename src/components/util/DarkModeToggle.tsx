import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import useDarkMode from "hooks/useDarkMode";
import React from "react";
import { filterClasses } from "utils";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="relative">
      <button
        className={filterClasses(
          "fixed z-50 bottom-10 left-10 p-2 rounded-full transition ease-in-out hover:scale-[120%] focus:ring-4 shadow-lg",
          darkMode
            ? "bg-gray-400 hover:bg-gray-600 focus:ring-gray-500"
            : "bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
        )}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <SunIcon className="w-8 h-8 text-white font-bold" />
        ) : (
          <MoonIcon className="w-8 h-8 text-white font-bold" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
