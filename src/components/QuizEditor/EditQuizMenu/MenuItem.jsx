import React from "react";

export default function MenuItem({ children, id, onClick }) {
  return (
    <li
      className={`flex justify-between items-center
            px-10 py-6 text-blue-1000 hover:bg-gray-100 
            ${onClick && "active:bg-gray-200 cursor-pointer"}`}
      onClick={onClick && (() => onClick(id))}
    >
      {children}
    </li>
  );
}
