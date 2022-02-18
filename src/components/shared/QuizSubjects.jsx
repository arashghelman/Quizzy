import React from "react";
import EditText from "./EditText";

export default function QuizSubjects({ data, custom }) {
  return (
    <div className={custom}>
      {data ? (
        <ul className="flex">
          {data.map((x) => (
            <li
              key={x.subjectId}
              className="after:content-[','] after:mr-1 last:after:content-['']"
            >
              {x.name}
            </li>
          ))}
        </ul>
      ) : (
        <EditText>Click here to add subjects</EditText>
      )}
    </div>
  );
}
