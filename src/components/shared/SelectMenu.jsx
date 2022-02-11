import React from "react";

export default function SelectMenu({ data, title }) {
  return (
    <div className="relative grid group">
      <select
        className="border-2 rounded-full px-5 py-2 bg-transparent
            border-gray-300 group-hover:border-blue-400 focus:border-blue-400 
            text-gray-500 group-hover:text-blue-500 focus:text-blue-500
            focus:outline-none appearance-none cursor-pointer"
      >
        <option disabled selected>
          {title}
        </option>
        {data.map((x) => (
          <option>{x}</option>
        ))}
      </select>
      <i
        className="absolute top-2.5 left-3/4 text-xl 
                text-gray-400 group-hover:text-blue-400 -z-1 ri-arrow-down-s-line"
      ></i>
    </div>
  );
}
