import React, { useState } from "react";
import Button from "../shared/Button";

const QuestionCard = ({ data, backSide, onOptionCheck }) => {
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
                onChange={() => onOptionCheck(questionId, x.optionId)}
              />
            ))}
          </div>
          <div className="self-end">
            <Button
              type="button"
              variant="greenish"
              custom="px-5"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Side>
        <Side back>{backSide}</Side>
      </div>
    </div>
  );
};

export default QuestionCard;

const Side = ({ children, back, visible }) => (
  <div
    className="absolute w-full h-full flex flex-col justify-center items-center gap-8 p-8 rounded-md bg-white"
    style={{
      backfaceVisibility: "hidden",
      transform: back && "rotateY(180deg)",
    }}
  >
    {children}
  </div>
);

const RadioButton = ({ label, id, name, onChange }) => (
  <label className="block cursor-pointer group">
    <input
      type="radio"
      id={id}
      name={name}
      onChange={onChange}
      className="invisible absolute peer"
    />
    <div
      className="border-1 p-2 rounded-full 
        border-gray-300 hover:border-blue-400
        text-gray-400 group-hover:text-blue-500
        peer-checked:-m-px peer-checked:border-2
        peer-checked:border-blue-400 peer-checked:text-blue-500
        peer-checked:font-medium transform duration-100"
    >
      {label}
    </div>
  </label>
);
