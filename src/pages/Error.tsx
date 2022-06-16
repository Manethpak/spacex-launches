import React from "react";
import { Link } from "react-router-dom";
import bgImage from "assets/image/error-bg.jpg";

const Error: React.FC = () => {
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center sm:bg-center brightness-50"
        style={{
          backgroundImage: `url("${bgImage}")`,
        }}
      ></main>
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-2xl font-semibold text-white text-opacity-60 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Uh oh! I think you're lost.
        </h1>
        <p className="mt-2 text-xl font-medium text-white text-opacity-60">
          It looks like the page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-60 hover:bg-opacity-50"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
