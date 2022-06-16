import React from "react";
import { RocketDetailFragment } from "apollo/generated/schema";
import { filterClasses } from "utils";

const DetailRocketInfo = (props: RocketDetailFragment) => {
  return (
    <div className="mx-auto">
      <dl className="rounded-lg border bg-white shadow-lg lg:grid lg:grid-cols-4">
        <div className="flex flex-col border-b border-gray-300 p-6 text-center lg:border-0 lg:border-r">
          <dt className=" mt-2 text-xl leading-6 font-medium text-gray-500">
            Name
          </dt>
          <dd
            className={filterClasses(
              props.rocket?.active ? "text-green-500" : "text-red-500",
              "text-2xl font-semibold text-gray-500"
            )}
          >
            {props.rocket?.name ?? "Unavailable"}
          </dd>
        </div>
        <div className="flex flex-col border-b border-gray-300 p-6 text-center lg:border-0 lg:border-r">
          <dt className=" mt-2 text-xl leading-6 font-medium text-gray-500">
            Weight
          </dt>
          <dd className="text-2xl font-semibold text-gray-500">
            {props.rocket?.mass?.kg + " Kg" ?? "Unavailable"}
          </dd>
        </div>
        <div className="flex flex-col border-b border-gray-300 p-6 text-center lg:border-0 lg:border-r">
          <dt className=" mt-2 text-xl leading-6 font-medium text-gray-500">
            Height
          </dt>
          <dd className="text-2xl font-semibold text-gray-500">
            {props.rocket?.height?.meters + " m" ?? "Unavailable"}
          </dd>
        </div>
        <div className="flex flex-col border-b border-gray-300 p-6 text-center lg:border-0 lg:border-r">
          <dt className=" mt-2 text-xl leading-6 font-medium text-gray-500">
            Diameter
          </dt>
          <dd className="text-2xl font-semibold text-gray-500">
            {props.rocket?.diameter?.meters + " m" ?? "Unavailable"}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default DetailRocketInfo;
