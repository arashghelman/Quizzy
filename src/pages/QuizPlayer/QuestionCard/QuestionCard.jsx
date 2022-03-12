import React, { useState } from "react";
import Button from "@components/Button";
import CardSide from "./CardSide";
import AnswerRadioButton from "./AnswerRadioButton";

export default function QuestionCard({ data, backSide, onOptionCheck }) {
  const { questionId, title, options, number } = data;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleSubmit = () => setIsFlipped(true);

  return (
    <div className="relative w-1/3 h-[430px]">
      <div
        className="absolute h-full w-full rounded-md shadow-md transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped && "rotateY(180deg)",
        }}
      >
        <CardSide custom={isFlipped && "-z-1"}>
          <div className="text-blue-1000 flex flex-col gap-2">
            <span className="text-sm font-light">Question {number}</span>
            <h1 className="text-xl">Q. {title}</h1>
          </div>
          <div
            role="list"
            className="grid grid-rows-4 auto-rows-fr gap-5 w-full"
          >
            {options.length < 4 && <div></div>}
            {options.map((x) => (
              <AnswerRadioButton
                key={x.optionId}
                label={x.value}
                id={x.optionId}
                name={questionId}
                onChange={() => onOptionCheck(questionId, x.optionId)}
              />
            ))}
          </div>
          <div className="self-end">
            <Button type="button" variant="greenish" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </CardSide>
        <CardSide back>{backSide}</CardSide>
      </div>
    </div>
  );
}
