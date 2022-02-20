import React from "react";
import ProgressBar from "../../shared/ProgressBar";
import TodoItem from "./TodoItem";

export default function QuizQualityCard({ status }) {
  const todos = [
    {
      title: "Pick a relevant name for your quiz",
      isCompleted: status.hasName,
    },
    { title: "Add a quiz thumbnail", isCompleted: status.hasThumbnail },
    { title: "Add grades", isCompleted: status.hasGrades },
    {
      title: "Write a brief description about your quiz",
      isCompleted: status.hasDescription,
    },
    {
      title: "Add at least 4 questions",
      isCompleted: status.hasEnoughQuestions,
    },
  ];

  const value = todos.filter((x) => x.isCompleted).length;
  const max = todos.length;
  const score = (value * 10) / max;

  let barColor;
  switch (true) {
    case score <= 2.5:
      barColor = "bg-red-400";
      break;

    case 2.5 < score && score <= 7.5:
      barColor = "bg-blue-400";
      break;

    case 7.5 < score && score <= 9.5:
      barColor = "bg-emerald-400";
      break;

    case 9.5 < score && score <= 10:
      barColor = "bg-yellow-400";
      break;

    default:
      barColor = "bg-gray-300";
      break;
  }

  return (
    <section
      className="flex flex-col gap-y-5 px-7 py-6 rounded-md bg-white 
            text-left text-blue-1000 shadow-md"
    >
      <h1 className="font-medium">Quiz quality score</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-x-1">
          <span className="text-xl">{score}</span>
          <span>/</span>
          <span>10</span>
        </div>
        <ProgressBar
          value={todos.filter((x) => x.isCompleted).length}
          max={todos.length}
          color={barColor}
        />
      </div>
      <ul className="mt-2 grid gap-y-6">
        {todos.map((x, i, arr) => (
          <TodoItem
            key={i}
            last={arr.length - 1 === i}
            completed={x.isCompleted}
          >
            {x.title}
          </TodoItem>
        ))}
      </ul>
    </section>
  );
}
