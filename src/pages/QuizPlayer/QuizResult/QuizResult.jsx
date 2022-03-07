import React from "react";
import ScoreProgressBar from "./ScoreProgressBar";

export default function QuizResult({
  result: { score, correctAnswersCount, wrongAnswersCount },
}) {
  return (
    <div className="text-blue-1000 flex flex-col gap-10">
      <span className="text-xl">Your score:</span>
      <div className="w-[180px]">
        <ScoreProgressBar value={score} />
      </div>
      <div className="grid gap-4">
        <BulletPoint text="Correct answers" color="bg-emerald-400">
          {correctAnswersCount}
        </BulletPoint>
        <BulletPoint text="Wrong answers" color="bg-red-400">
          {wrongAnswersCount}
        </BulletPoint>
      </div>
    </div>
  );
}

function BulletPoint({ children, text, color }) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-3">
        <span className={`inline-block w-4 h-4 ${color} p-1 rounded-md`}></span>
        <span>{text}</span>
      </div>
      <span>{children}</span>
    </div>
  );
}
