import React from "react";

export default function Button({
  children,
  icon,
  variant = "primary",
  custom,
  onClick,
  ...props
}) {
  const variants = new Map([
    [
      "primary",
      "border-1 border-gray-300 rounded-sm text-sm text-blue-1000 font-medium px-2",
    ],
    [
      "secondary",
      "rounded-full w-10 h-10 text-2xl text-gray-500 hover:bg-gray-100 active:bg-gray-200",
    ],
    [
      "add",
      "border-1 border-dashed border-gray-300 text-gray-300 ri-add-line hover:border-blue-400 hover:text-blue-400",
    ],
  ]);
  return (
    <button
      className={`flex justify-center items-center gap-x-1 ${variants.get(
        variant
      )} ${custom}`}
      onClick={() => onClick()}
      {...props}
    >
      {icon && <i className={icon}></i>}
      {children}
    </button>
  );
}
