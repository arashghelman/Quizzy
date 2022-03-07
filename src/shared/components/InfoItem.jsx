import React from "react";

export default function InfoItem({ children, icon }) {
  return (
    <li className="mb-4 flex items-center text-sm text-blue-1000 font-medium">
      <i
        className={`flex justify-center items-center mr-3 w-6 h-6 
                rounded-sm bg-turquoise text-gray-700 ${icon}`}
      ></i>
      {children}
    </li>
  );
}
