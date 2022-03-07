import React from "react";

export default function QuizSubjects({ data, custom }) {
  return (
    <ul className={`flex ${custom}`}>
      {data.map((x) => (
        <li
          key={x.subjectId}
          className="after:content-[','] after:mr-1 last:after:content-['']"
        >
          {x.name}
        </li>
      ))}
    </ul>
  );
}
