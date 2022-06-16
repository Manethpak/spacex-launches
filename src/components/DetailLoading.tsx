import React from "react";
import LoadingSpinner from "./util/LoadingSpinner";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center text-3xl">
      <p className="text-gray-800 mb-10">Your page is loading...</p>
      <LoadingSpinner classNames="w-10 h-10 text-gray-800" />
    </div>
  );
};

export default Loading;
