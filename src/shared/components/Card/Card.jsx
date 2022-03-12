import React from "react";

export default function Card({ children, layout }) {
  return (
    <div className={`bg-white rounded-md shadow-md ${layout}`}>{children}</div>
  );
}
