import React from "react";
import EditText from "./EditText";

export default function QuizGrades({ data, custom }) {
  return data ? (
    <div className={`flex gap-x-1 ${custom}`}>
      <span>{data?.min}</span>
      <span>-</span>
      <span>{data?.max}</span>
      <span>grades</span>
    </div>
  ) : (
    <EditText>Click here to add grades</EditText>
  );
}
