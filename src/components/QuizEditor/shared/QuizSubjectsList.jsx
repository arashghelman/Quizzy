import React from "react";

export default function QuizSubjectsList({ data, custom }) {
  return (
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
  );
}
