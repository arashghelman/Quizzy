import React from "react";

export default function Button({
  children,
  type = "button",
  icon,
  variant = "default",
  onClick,
  customStyle,
  ...props
}) {
  const variants = {
    default:
      "border-1 border-gray-300 rounded-sm text-sm text-blue-1000 font-medium px-2 py-1 hover:opacity-70",
    greenish:
      "text-white font-medium rounded-md bg-emerald-400 px-6 py-2 hover:bg-emerald-500",
    custom: customStyle,
  };
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-x-1 ${variants[variant]}`}
      onClick={onClick}
      {...props}
    >
      {icon && <i className={icon}></i>}
      {children}
    </button>
  );
}
