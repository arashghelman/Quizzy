import React from "react";

export default function ProgressBar({ value, max, color, custom }) {
  return (
    <div className={`rounded-full bg-gray-300 ${custom}`}>
      <div
        className={`rounded-full h-2 ${color} ${custom}`}
        style={{ width: value === 0 ? "0.75rem" : `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
}
