import React from "react";

export default function Side({ back, children }) {
  return (
    <div
      className="absolute w-full h-full flex flex-col 
          justify-center items-center gap-8 p-8 rounded-md bg-white"
      style={{
        backfaceVisibility: "hidden",
        transform: back && "rotateY(180deg)",
      }}
    >
      {children}
    </div>
  );
}
