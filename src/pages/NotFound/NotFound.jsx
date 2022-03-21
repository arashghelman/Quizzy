import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-10">
      <h1 className="text-5xl text-red-400">404</h1>
      <span className="text-xl text-gray-400">Resource not found.</span>
    </div>
  );
}
