import React from "react";

export default function Backdrop({ children }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-70 z-40">
      {children}
    </div>
  );
}
