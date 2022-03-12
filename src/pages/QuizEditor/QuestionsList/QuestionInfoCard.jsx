import React from "react";
import { removeIcon, editIcon } from "@constants/uiConstants";
import Card from "@components/Card";
import Button from "@components/Button";

export default function QuestionInfoCard({ info, onEdit, onRemove }) {
  return (
    <Card layout="flex flex-col gap-y-6 p-3">
      <div className="flex gap-x-3">
        <div
          className="rounded-sm w-16 h-16 flex justify-center items-center 
              bg-amber-300 text-lg"
        >
          <i className="ri-checkbox-multiple-line"></i>
        </div>
        <div className="flex flex-col flex-1 gap-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xs">Question {info.number}</h2>
            <div className="flex gap-x-3 text-sm">
              <Button icon={editIcon} onClick={onEdit}>
                Edit
              </Button>
              <Button icon={removeIcon} onClick={onRemove} />
            </div>
          </div>
          <h1 className="text-left font-medium">Q. {info.title}</h1>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-y-7 mx-3 mb-3">
        {info.options.map((x) => (
          <Option
            key={x.optionId}
            color={`${x.isCorrect ? "bg-turquoise" : "bg-pink-400"}`}
          >
            {x.value}
          </Option>
        ))}
      </ul>
    </Card>
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
