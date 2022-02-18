import React from "react";
import ProgressBar from "./ProgressBar";
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

  return (
    <section
      className="flex flex-col gap-y-5 px-7 py-6 rounded-md bg-white 
            text-left text-blue-1000 shadow-md"
    >
      <h1 className="font-medium">Quiz quality score</h1>
      <ProgressBar
        value={todos.filter((x) => x.isCompleted).length}
        max={todos.length}
      />
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
