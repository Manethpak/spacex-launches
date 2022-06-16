import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const DetailError = ({ param }: { param: string }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-2xl mx-auto lg:max-w-7xl bg-white min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-gray-800 text-3xl font-semibold mb-5">404 Error</h1>
        <p className="text-gray-800 text-xl mb-10">
          Looks like the page you're looking for doesn't exist.
        </p>
        <button className="bg-amber-500 rounded-lg px-4 py-2">
          <Link to="/" className="text-white inline-flex items-center">
            <ChevronLeftIcon className="w-5 h-5" />
            <span>GO BACK</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DetailError;
