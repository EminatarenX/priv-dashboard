import React from "react";

export default function Stats({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div
          className="flex gap-5 w-full justify-evenly xl:justify-center"
          key={index}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
              {item.title}
            </h2>
            <h1 className="text-4xl text-white">{item.ammount}</h1>
          </div>
          {/* <CircularChart value={60} /> */}
        </div>
      ))}
    </>
  );
}
