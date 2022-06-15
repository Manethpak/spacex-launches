import React from "react";
import { LaunchCardFragment } from "apollo/generated/schema";
import { Link } from "react-router-dom";
import { transformDate } from "utils";

const LaunchCard = ({
  id,
  mission_name,
  details,
  launch_date_utc,
  launch_success,
  links,
}: LaunchCardFragment) => {
  return (
    <div
      key={id}
      className="flex flex-col bg-white rounded-2xl shadow-xl max-h-96"
    >
      <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        {links?.mission_patch_small ? (
          <div className="absolute top-0 w-20 h-20 p-2 inline-block bg-gray-600 rounded-xl shadow-lg transform -translate-y-1/2 bg-opacity-80">
            <img src={links.mission_patch_small} alt={mission_name ?? ""} />
          </div>
        ) : (
          ""
        )}
        <h3 className="text-xl font-medium text-gray-900">
          {mission_name}{" "}
          {launch_success ? (
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
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 float-right">
              <svg
                className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              Failed
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-500">
          Launch date: {transformDate(launch_date_utc)}
        </p>
        <p className="mt-4 text-base text-gray-500 line-clamp-5">{details}</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
        <Link
          className="text-base font-medium text-amber-500 hover:text-amber-600"
          to={"/" + id}
        >
          More info<span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default LaunchCard;
