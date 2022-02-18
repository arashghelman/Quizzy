import React from "react";
import EditText from "./EditText";

export default function QuizGrades({ min, max, custom }) {
  return (
    <div className={custom}>
      {min && max ? (
        <div className="flex gap-x-1">
          <span>{min.name}</span>
          <span>-</span>
          <span>{max.name}</span>
          <span>grades</span>
        </div>
      ) : (
        <EditText>Click here to add grades</EditText>
      )}
    </div>
  );
}
