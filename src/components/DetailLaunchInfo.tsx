import React from "react";
import { LaunchDetailFragment } from "apollo/generated/schema";
import { filterClasses, transformDate } from "utils";

const DetailLaunchInfo = (props: LaunchDetailFragment) => {
  return (
    <div className="mx-auto">
      <dl className="rounded-lg border dark:border-neutral-600 bg-white dark:bg-[#181a1b] shadow-lg lg:grid lg:grid-cols-3">
        <div className="flex flex-col border-b border-gray-300 dark:border-neutral-600 p-6 text-center lg:border-0 lg:border-r">
          <dt className=" mt-2 text-xl leading-6 font-medium text-gray-500 dark:text-stone-500">
            Date
          </dt>
          <dd className="text-2xl font-semibold text-gray-500 dark:text-stone-500">
            {transformDate(props.launch_date_utc)}
          </dd>
        </div>
        <div className="flex flex-col border-b border-gray-300 dark:border-neutral-600 p-6 text-center lg:border-0 lg:border-r">
          <dt className=" mt-2 text-xl leading-6 font-medium text-gray-500 dark:text-stone-500">
            Status
          </dt>
          <dd
            className={filterClasses(
              props.launch_success ? "text-green-500" : "text-red-500",
              "text-2xl font-semibold"
            )}
          >
            {props.launch_success ? " Succeed" : "Unknown"}
          </dd>
        </div>
        <div className="flex flex-col border-b border-gray-300 dark:border-neutral-600 p-6 text-center lg:border-0 lg:border-r">
          <dt className=" mt-2 text-xl leading-6 font-medium text-gray-500 dark:text-stone-500">
            Site: {props.launch_site?.site_name}
          </dt>
          <dd className="text-2xl font-semibold text-gray-500 dark:text-stone-500">
            {props.launch_site?.site_name_long}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default DetailLaunchInfo;
