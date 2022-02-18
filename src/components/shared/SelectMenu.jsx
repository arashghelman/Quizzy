import React from "react";

export default function SelectMenu({ data, label, name }) {
  return (
    <div
      className="group px-5 py-2 flex items-center justify-between border-2 rounded-full 
      border-gray-300 hover:border-blue-400 focus-within:border-blue-400
      text-gray-400 hover:text-blue-500 focus-within:text-blue-500 cursor-pointer"
    >
      <select
        name={name}
        className="bg-transparent focus:outline-none appearance-none cursor-pointer"
      >
        <option disabled selected>
          {label}
        </option>
        {data.map((x) => (
          <option key={x.gradeId} value={x.gradeId}>
            {x.name}
          </option>
        ))}
      </select>
      <i className="text-xl focus-within:text-blue-500 -z-1 ri-arrow-down-s-line"></i>
    </div>
  );
}
