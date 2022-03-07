import React from "react";

export default function QuizGrades({ min, max, custom }) {
  return (
    <div className={`flex gap-x-1 ${custom}`}>
      <span>{min.name}</span>
      <span>-</span>
      <span>{max.name}</span>
      <span>grades</span>
    </div>
  );
}
