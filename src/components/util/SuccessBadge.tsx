import React from "react";

const SuccessBadge = ({ success }: { success: boolean | null }) => {
  if (success) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 float-right">
        <svg
          className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        Succeed
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 float-right">
      <svg
        className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
      Unknown
    </span>
  );
};

export default SuccessBadge;
