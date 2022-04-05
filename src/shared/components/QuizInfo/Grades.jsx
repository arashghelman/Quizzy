import React from "react";

export default function Grades({ minGrade, maxGrade }) {
  return (
    <div className="flex gap-x-1">
      <span>{minGrade}</span>
      <span>-</span>
      <span>{maxGrade}</span>
      <span>grades</span>
    </div>
  );
}
