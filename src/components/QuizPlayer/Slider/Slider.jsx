import React from "react";

export default function Slider({ children }) {
  return (
    <div className="flex relative w-full overflow-hidden h-full justify-center items-center">
      {children}
    </div>
  );
}
