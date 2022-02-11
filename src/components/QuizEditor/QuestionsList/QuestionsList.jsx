import React from "react";
import QuestionCard from "./QuestionCard";
import Button from "../../shared/Button";

export default function QuestionsList({ children }) {
  return (
    <>
      <div className="flex flex-col gap-y-3 text-left text-blue-1000">
        <h1 className="text-xl font-medium">Questions</h1>
        <h2>List of questions in my quiz</h2>
      </div>
      <ul className="my-10 grid grid-cols-2 gap-x-8 gap-y-7 auto-rows-fr">
        {children}
      </ul>
    </>
  );
}
