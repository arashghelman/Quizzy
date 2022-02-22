import React from "react";
import Button from "../../shared/Button";

export default function QuestionCard({ number, data, onClickEdit }) {
  const { title, options } = data;

  return (
    <li className="flex flex-col gap-y-6 rounded-md p-3 bg-white text-blue-1000 shadow-md">
      <div className="flex gap-x-3">
        <i
          className="rounded-sm w-16 h-16 flex justify-center items-center 
            bg-amber-300 ri-checkbox-multiple-line text-lg"
        ></i>
        <div className="flex flex-col flex-1 gap-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xs">Question {number}</h2>
            <div className="flex gap-x-3 text-sm">
              <Button icon="ri-pencil-line" onClick={onClickEdit}>
                Edit
              </Button>
              <Button icon="ri-delete-bin-line" custom="w-7 h-7" />
            </div>
          </div>
          <h1 className="text-left font-medium">Q. {title}</h1>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-y-7 mx-3 mb-3">
        {options.map((x) => (
          <Option
            key={x.optionId}
            color={`${x.isCorrect ? "bg-turquoise" : "bg-pink-400"}`}
          >
            {x.value}
          </Option>
        ))}
      </ul>
    </li>
  );
}

function Option({ children, color }) {
  return (
    <li className="flex items-center gap-x-3 text-sm">
      <span className={`inline-block w-3 h-3 rounded-full ${color}`}></span>
      {children}
    </li>
  );
}
