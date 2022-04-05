import React from "react";

export default function EditText({ children, onClick }) {
  return (
    <span onClick={onClick} className="italic hover:opacity-70 cursor-pointer">
      {children}
    </span>
  );
}
