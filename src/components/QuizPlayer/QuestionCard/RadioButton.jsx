import React from "react";

export default function RadioButton({ label, id, name }) {
  return (
    <label className="block cursor-pointer group">
      <input
        type="radio"
        id={id}
        name={name}
        className="invisible absolute peer"
      />
      <div
        className="border-1 p-2 rounded-full 
        border-gray-300 hover:border-blue-400
        text-gray-400 group-hover:text-blue-500
        peer-checked:-m-px peer-checked:border-2
        peer-checked:border-blue-400 peer-checked:text-blue-500
        peer-checked:font-medium transform duration-100"
      >
        {label}
      </div>
    </label>
  );
}
