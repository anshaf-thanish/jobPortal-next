import Image from "next/image";
import React from "react";
import { BiCheck } from "react-icons/bi";

const Info = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image content */}
        <div>
          <Image src="/images/a.png" alt="img" width={1000} height={1000} />
        </div>

        {/* Text content */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading-16">
            Get applications from the world best talents.
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>

          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-4">
              <BiCheck className="w-7 h-7 text-pink-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Bring to the table win-win survival.
              </span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <BiCheck className="w-7 h-7 text-pink-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Capitalize on low hanging fruit to identify.
              </span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <BiCheck className="w-7 h-7 text-pink-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                But I must explain to you how all this.
              </span>
            </div>

            <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
