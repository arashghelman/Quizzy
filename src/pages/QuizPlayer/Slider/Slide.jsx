import React from "react";

export default function Slide({ children, state }) {
  const states = {
    current: "translate-x-0",
    next: "translate-x-full",
    prev: "-translate-x-full",
  };

  return (
    <div
      className={`absolute left-1/3 w-full transition duration-300 ${states[state]}`}
    >
      {children}
    </div>
  );
}
