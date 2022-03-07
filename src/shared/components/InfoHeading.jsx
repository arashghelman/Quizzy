import React from "react";

export default function InfoHeading({
  heading,
  subHeading,
  fontSize = "base",
}) {
  const sizes = { base: ["text-lg", "text-sm"], sm: ["text-base", "text-xs"] };
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`text-blue-1000 font-medium ${sizes[fontSize][0]}`}>
        {heading}
      </h1>
      <span
        className={`text-pink-400 text-xs font-medium ${sizes[fontSize][1]}`}
      >
        {subHeading}
      </span>
    </div>
  );
}
