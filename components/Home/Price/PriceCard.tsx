import React from "react";
import { BiCheck } from "react-icons/bi";

type Props = {
  type: string;
  price: string;
}

const PriceCard = ({ price, type }: Props) => {
  return (
    <div className="bg-gray-300 dark:bg-gray-700 p-10 rounded-lg relative">
      {/* Recommended badge */}
      {type === "Standard" && (
        <div className="absolute top-7 right-7 px-6 py-1.5 bg-green-800 text-white rounded-full text-xs">
          Recommended
        </div>
      )}

      {/* Plan type */}
      <h1 className="mt-6 text-xl font-bold text-blue-900 dark:text-blue-200">
        {type}
      </h1>

      {/* Price */}
      <div className="mt-3">
        <span className="text-4xl font-bold text-blue-950 dark:text-white">
        Rs {price}{" "}
      </span>
      / Monthly
      </div>

      {/* Feature list */}
      <div className="mt-12">
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            1 Job posting 
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            0 Featured job 
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Job displayed for 20 days 
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Premium Support 24/7
          </span>
        </div>
      </div>

      {/* Action button */}
      <div className="mt-8 text-center">
        <button className="w-full bg-blue-900/15 dark:bg-gray-100 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-pointer py-3">
          View Profile
        </button>
      </div>
    </div>
  )
}

export default PriceCard;
