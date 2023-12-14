"use client";
import { Search } from "lucide-react";
import React from "react";

const Serach = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2  rounded-full shadow-sm hover:shadow-md transition  cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">anywhere</div>

        <div className="hidden sm:block text-sm  font-semibold px-6 border-x[1px] flex-1 text-center">
          anyweek
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guest</div>

          <div className="p-2 bg-rose-500 rounded-full text-white">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serach;
