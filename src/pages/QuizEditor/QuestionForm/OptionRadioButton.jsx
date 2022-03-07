import React, { forwardRef } from "react";

const OptionRadioButton = forwardRef(
  ({ id, name, value, defaultChecked, onChange, ...rest }, ref) => (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      onChange={onChange}
      ref={ref}
      {...rest}
      className="flex items-center justify-center appearance-none cursor-pointer 
        bg-gray-100 rounded-sm w-5 h-5 text-lg font-semibold ri-check-line 
        checked:text-white checked:bg-emerald-400"
    />
  )
);

export default OptionRadioButton;
