import React from "react";
import ProgressBar from "../shared/ProgressBar";
import QuestionCard from "./QuestionCard/QuestionCard";

export default function QuizPlayer() {
  return (
    <div className="flex flex-col h-full">
      <div className="w-1/2 flex flex-col gap-3 self-center">
        <ProgressBar
          value="2"
          max="15"
          color="bg-emerald-400"
          custom="h-[12px]"
        />
        <span className="text-blue-1000">2 / 15</span>
      </div>
      <form className="flex justify-center items-center h-full">
        <QuestionCard />
      </form>
    </div>
  );
}
