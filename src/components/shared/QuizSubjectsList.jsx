import React from "react";
import EditText from "./EditText";

export default function QuizSubjectsList({ data, custom }) {
  return data ? (
    <ul className={custom}>
      {data.map((x) => (
        <li
          key={x.id}
          className={`after:content-[','] after:mr-1 last:after:content-[''] ${custom}`}
        >
          {x.name}
        </li>
      ))}
    </ul>
  ) : (
    <EditText>Click here to add subjects</EditText>
  );
}
