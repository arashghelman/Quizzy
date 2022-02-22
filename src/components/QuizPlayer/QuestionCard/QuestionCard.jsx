import React, { useState } from "react";
import Side from "./Side";
import RadioButton from "./RadioButton";
import Result from "./Result";
import Button from "../../shared/Button";

export default function QuestionCard({ data }) {
  const { questionId, title, options, number } = data;

  const [isFlipped, setIsFlipped] = useState(false);
  const handleSubmitClick = () => setIsFlipped(true);

  return (
    <section className="relative w-1/3 h-[430px]">
      <div
        className="absolute h-full w-full rounded-md shadow-md transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped && "rotateY(180deg)",
        }}
      >
        <Side>
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
              <RadioButton
                key={x.optionId}
                label={x.value}
                id={x.optionId}
                name={questionId}
              />
            ))}
          </div>
          <div className="flex justify-end w-full">
            <Button
              type="button"
              variant="greenish"
              custom="px-3"
              onClick={handleSubmitClick}
            >
              Submit
            </Button>
          </div>
        </Side>
        <Side back>
          <Result score={12.5} correctAnswer="on" />
          <Button type="button" variant="greenish" custom="px-3">
            Next
          </Button>
        </Side>
      </div>
    </section>
  );
}
