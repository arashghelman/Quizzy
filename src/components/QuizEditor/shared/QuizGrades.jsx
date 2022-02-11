import React from "react";

export default function QuizGrades({ data, custom }) {
  return (
    <div className={`flex gap-x-1 text-sm ${custom}`}>
      <span>{data?.min}</span>
      <span>-</span>
      <span>{data?.max}</span>
      <span>grades</span>
    </div>
  );
}
