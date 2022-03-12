import React from "react";

export default function GradeSelect({ options, defaultValue, name, onSelect }) {
  return (
    <div
      className="group relative flex items-center justify-between border-1 rounded-full 
        border-gray-300 hover:border-blue-400 focus-within:border-blue-400
        text-gray-400 hover:text-blue-500 focus-within:text-blue-500 cursor-pointer"
    >
      <select
        name={name}
        defaultValue={defaultValue}
        onChange={onSelect}
        className="w-full px-5 py-2 bg-transparent focus:outline-none appearance-none cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <i className="absolute right-3.5 text-xl focus-within:text-blue-500 -z-1 ri-arrow-down-s-line"></i>
    </div>
  );
}
