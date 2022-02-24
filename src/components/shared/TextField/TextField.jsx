import { React, forwardRef } from "react";
import "./TextField.css";

const TextField = forwardRef(
  ({ children, type = "text", id, name, label, value }, ref) => (
    // focus-within is not supported in IE.
    <div
      className="relative flex items-center rounded-xl z-10
        border-1 focus-within:border-2 focus-within:-m-px
        border-gray-300 hover:border-blue-400 focus-within:border-blue-400 
        text-gray-400 hover:text-blue-500 focus-within:text-blue-500"
    >
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={value}
        placeholder=" "
        ref={ref}
        className="block rounded-xl w-full py-4 pl-4 text-gray-700 
          bg-transparent appearance-none focus:outline-none TextInput peer"
      />
      <label
        htmlFor={id}
        className="block absolute ml-3 px-1 -z-1 bg-white duration-150 TextLabel 
          transform peer-focus-within:z-0 peer-focus-within:scale-90 
          peer-focus-within:-translate-y-8 peer-focus-within:-translate-x-3"
      >
        {label}
      </label>
      {children}
    </div>
  )
);

export default TextField;
