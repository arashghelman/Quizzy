import React from "react";

export default function Subjects({ subjects }) {
  return (
    <ul className="flex">
      {subjects.map((subject, index) => (
        <li
          key={index}
          className="after:content-[','] after:mr-1 last:after:content-['']"
        >
          {subject}
        </li>
      ))}
    </ul>
  );
}
