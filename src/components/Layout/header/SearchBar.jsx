import React from "react";

export default function SearchBar() {
  return (
    <div className="rounded-full bg-[#50193d] bg-opacity-40 w-full md:w-2/3 py-3 flex justify-between items-center px-4" >
      <input
        type="text"
        className="bg-transparent placeholder:text-neutral-500 w-full outline-none text-neutral-400  text-sm"
        placeholder="Search..."
      />
      <svg
        xmlns="http://www.w3.org/2000/px-4svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}
