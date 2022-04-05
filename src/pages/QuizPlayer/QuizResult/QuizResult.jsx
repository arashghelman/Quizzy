import React from "react";
import { useNavigate } from "react-router";
import Button from "@components/Button";
import ScoreProgressBar from "./ScoreProgressBar";

export default function QuizResult({
  result: { score, correctAnswersCount, wrongAnswersCount },
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16">
      <span className="text-xl">Your score:</span>
      <div className="flex flex-col gap-20">
        <div className="flex items-center justify-center gap-16">
          <div className="w-[150px]">
            <ScoreProgressBar value={score} />
          </div>
          <div className="flex flex-col gap-6">
            <BulletPoint text="Correct answers" color="bg-emerald-400">
              {correctAnswersCount}
            </BulletPoint>
            <BulletPoint text="Wrong answers" color="bg-red-400">
              {wrongAnswersCount}
            </BulletPoint>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="greenish" onClick={() => window.location.reload()}>
            Play again
          </Button>
          <Button variant="greenish" onClick={() => navigate("/")}>
            Exit to home
          </Button>
        </div>
      </div>
    </div>
  );
}

function BulletPoint({ children, text, color }) {
  return (
    <div className="flex gap-4 text-sm">
      <div className="flex items-center gap-3">
        <span className={`inline-block w-4 h-4 ${color} p-1 rounded-md`}></span>
        <span>{text}</span>
      </div>
      <span>{children}</span>
    </div>
  );
}
