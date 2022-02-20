import React, { useState } from "react";
import OptionRadioButton from "./OptionRadioButton";
import Button from "../../shared/Button";

export default function QuestionCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const successMessages = ["Brilliant!", "Well done.", "Good job!"];
  const randomSuccessMessgae =
    successMessages[Math.floor(Math.random() * successMessages.length)];

  const failureMessage = ["Oh no!", "Oops..."];
  const randomFailureMessage =
    failureMessage[Math.floor(Math.random() * failureMessage.length)];

  return (
    <section className="relative w-1/3 h-[430px]">
      <div
        className="absolute h-full w-full shadow-md"
        style={{
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: isFlipped && "rotateY(180deg)",
        }}
      >
        <Side>
          <div className="text-blue-1000 flex flex-col gap-2">
            <span className="text-sm font-light">Question 1</span>
            <h1 className="text-xl">Q. This is the question title.</h1>
          </div>
          <div
            role="list"
            className="grid grid-rows-4 auto-rows-fr gap-5 w-full"
          >
            <div></div>
            <OptionRadioButton label="Option 1" />
            <OptionRadioButton label="Option 2" />
          </div>
          <div className="flex justify-end w-full">
            <Button
              type="button"
              variant="greenish"
              custom="px-3"
              onClick={() => setIsFlipped(true)}
            >
              Submit
            </Button>
          </div>
        </Side>
        <Side back>
          <span className="text-emerald-500 font-semibold text-4xl">
            {randomSuccessMessgae}
          </span>
          <div className="flex flex-col gap-5">
            <span className="text-emerald-500 font-medium text-xl">
              Your answer was correct.
            </span>
            <span className="text-slate-500">Score: 12.5%</span>
          </div>
          <Button type="button" variant="greenish" custom="px-3">
            Next
          </Button>
        </Side>
      </div>
    </section>
  );
}

function Side({ back, children }) {
  return (
    <div
      className="absolute w-full h-full flex flex-col justify-center items-center gap-8 px-8 rounded-md bg-white"
      style={{
        backfaceVisibility: "hidden",
        transform: back && "rotateY(180deg)",
      }}
    >
      {children}
    </div>
  );
}
