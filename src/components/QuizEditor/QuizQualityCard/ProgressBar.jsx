import React from "react";

export default function ProgressBar({ value, max }) {
  const score = (value * 10) / max;

  let barColor;
  switch (true) {
    case score <= 2.5:
      barColor = "bg-red-400";
      break;

    case 2.5 < score && score <= 7.5:
      barColor = "bg-blue-400";
      break;

    case 7.5 < score && score <= 9.5:
      barColor = "bg-emerald-400";
      break;

    case 9.5 < score && score <= 10:
      barColor = "bg-yellow-400";
      break;

    default:
      barColor = "bg-gray-300";
      break;
  }

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-1">
        <span className="text-xl">{score}</span>
        <span>/</span>
        <span>10</span>
      </div>
      <div className="rounded bg-gray-300">
        <div
          className={`rounded h-2 ${barColor}`}
          style={{ width: value === 0 ? "0.75rem" : `${(value / max) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
