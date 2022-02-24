import React, { forwardRef } from "react";

const RadioButton = forwardRef(({ id, name, value, checked }, ref) => (
  <input
    type="radio"
    name={name}
    value={value}
    defaultChecked={checked}
    id={id}
    ref={ref}
    className="flex items-center justify-center appearance-none cursor-pointer 
      bg-gray-100 rounded-sm w-5 h-5 text-lg font-semibold ri-check-line 
      checked:text-white checked:bg-emerald-400"
  />
));

export default RadioButton;
