import React from "react";

export default function QuizTodoItem({ children, last, completed }) {
  return (
    <li className="group cursor-default">
      <div className="flex justify-between items-center gap-x-2">
        <span
          className={`text-sm ${
            completed && "opacity-50 group-hover:opacity-70"
          }`}
        >
          {children}
        </span>
        {completed && (
          <span className="font-bold text-sm text-green-500 opacity-50 group-hover:opacity-70">
            &#10003;
          </span>
        )}
      </div>
      {!last && <hr className="mt-3" />}
    </li>
  );
}
