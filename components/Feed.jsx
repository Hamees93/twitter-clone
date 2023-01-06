import React from "react";
import { HiSparkles } from "react-icons/hi";

const Feed = () => {
  return (
    <div className=" border-l border-r flex-grow min-h-screen">
      <div className="flex justify-between items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center">
          <HiSparkles className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
