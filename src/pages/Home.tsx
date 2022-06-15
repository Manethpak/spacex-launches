import React, { useEffect, useState } from "react";
import backgroundImage from "assets/image/spacex-bg.jpg";
import LaunchCard from "components/LaunchCard";
import {
  LaunchCardFragment,
  useGetLaunchListQuery,
} from "apollo/generated/schema";
import LoadingSpinner from "components/util/LoadingSpinner";

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { data, loading, error, fetchMore } = useGetLaunchListQuery({
    variables: { offset },
  });

  useEffect(() => {});

  useEffect(() => {
    fetchMore({
      variables: { offset },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        console.log("prev", prev);
        console.log("fetch ", fetchMoreResult);
        return { ...prev, ...fetchMoreResult };
      },
    });
  }, [fetchMore, offset]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="bg-gray-200 min-h-screen">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src={backgroundImage}
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-500 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              SpaceX Launches
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-400">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames. Dui, amet, nec sit pulvinar.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-400 lg:gap-x-8">
            {data?.launchesPast?.map((link) => (
              <LaunchCard {...(link as LaunchCardFragment)} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center my-10">
            {error && (
              <p className="text-xl text-gray-800">
                Uh oh... Something went wrong.
              </p>
            )}
            <button onClick={() => setOffset((prev) => prev + 9)}>
              View More
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
