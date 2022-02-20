import React from "react";

export default function OptionRadioButton({ label }) {
  return (
    <div
      className="border-1 border-gray-300 rounded-full py-2 w-full 
        cursor-pointer flex justify-center hover:border-blue-400 group"
    >
      <input type="radio" className="hidden" />
      <label className="text-gray-400 group-hover:text-blue-500">{label}</label>
    </div>
  );
}
