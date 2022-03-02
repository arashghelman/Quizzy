import React from "react";
import Button from "../shared/Button";

const Result = ({ succeeded, correctAnswer, action: { title, handler } }) => {
  const successMessages = ["Brilliant!", "Well done.", "Good job!"];
  const failureMessages = ["Oh no!", "Oops..."];

  const config = succeeded
    ? {
        message: "Your answer was correct.",
        randomMessage:
          successMessages[Math.floor(Math.random() * successMessages.length)],
        color: "text-emerald-500",
      }
    : {
        message: "Your answer was wrong.",
        randomMessage:
          failureMessages[Math.floor(Math.random() * failureMessages.length)],
        color: "text-rose-400",
      };

  return (
    <>
      <span className={`${config.color} font-semibold text-4xl`}>
        {config.randomMessage}
      </span>
      <div className="flex flex-col gap-5">
        <span className={`${config.color} font-medium text-xl`}>
          {config.message}
        </span>
        {!succeeded && (
          <div className="flex justify-center items-center gap-2 text-slate-500">
            <span>Correct answer:</span>
            <span>{correctAnswer}</span>
          </div>
        )}
      </div>
      <Button type="button" variant="greenish" onClick={handler} custom="px-4">
        {title}
      </Button>
    </>
  );
};

export default Result;
