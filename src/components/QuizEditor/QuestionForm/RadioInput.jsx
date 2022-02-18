import React from "react";

export default function RadioInput({ name, checked, onChange, ...props }) {
  return (
    <input
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
      className="flex items-center justify-center appearance-none cursor-pointer 
        bg-gray-100 rounded-sm w-5 h-5 text-lg font-semibold ri-check-line 
        checked:text-white checked:bg-emerald-400"
      {...props}
    />
  );
}
