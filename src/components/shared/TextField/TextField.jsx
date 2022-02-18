import { React } from "react";
import "./TextField.css";

export default function TextField({
  children,
  id,
  type = "text",
  label,
  custom,
  onChange,
  ...props
}) {
  // focus-within is not supported in IE.
  return (
    <div
      className={`relative flex items-center rounded-xl z-10
        border-1 focus-within:border-2 focus-within:-m-px
        border-gray-300 hover:border-blue-400 focus-within:border-blue-400 
        text-gray-400 hover:text-blue-500 focus-within:text-blue-500 ${custom}`}
    >
      <input
        type={type}
        id={id}
        name={id}
        placeholder=" "
        pattern=".*\S+.*"
        className="block rounded-xl w-full py-4 pl-4 text-gray-700 
          bg-transparent appearance-none focus:outline-none TextInput peer"
        onChange={onChange}
        {...props}
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
  );
}
