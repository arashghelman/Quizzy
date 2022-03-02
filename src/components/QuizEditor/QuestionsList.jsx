import React, { useState } from "react";
import List from "../shared/List";
import Button from "../shared/Button";

const QuestionsList = ({ listData, onItemEdit, onItemAdd }) => {
  const [questions, setQuestions] = useState(listData);

  const handleItemRemove = (id) => {
    const updatedQuestions = questions.filter(
      (question) => question.questionId !== id
    );
    setQuestions(updatedQuestions);
  };

  return (
    <List
      heading="Questions"
      subHeading="List of questions in my quiz"
      gap="gap-8"
    >
      {questions.map((question, index) => (
        <QuestionInfoCard
          key={question.questionId}
          info={{ ...question, number: ++index }}
          onEdit={() => onItemEdit(question.questionId)}
          onRemove={() => handleItemRemove(question.questionId)}
        />
      ))}
      <Button
        type="button"
        variant="add"
        custom="bg-gray-50 rounded-md text-3xl"
        onClick={onItemAdd}
      />
    </List>
  );
};

export default QuestionsList;

const QuestionInfoCard = ({ info, onEdit, onRemove }) => (
  <li className="flex flex-col gap-y-6 rounded-md p-3 bg-white text-blue-1000 shadow-md">
    <div className="flex gap-x-3">
      <i
        className="rounded-sm w-16 h-16 flex justify-center items-center 
            bg-amber-300 ri-checkbox-multiple-line text-lg"
      ></i>
      <div className="flex flex-col flex-1 gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xs">Question {info.number}</h2>
          <div className="flex gap-x-3 text-sm">
            <Button icon="ri-pencil-line" onClick={onEdit}>
              Edit
            </Button>
            <Button
              icon="ri-delete-bin-line"
              custom="w-7 h-7"
              onClick={onRemove}
            />
          </div>
        </div>
        <h1 className="text-left font-medium">Q. {info.title}</h1>
      </div>
    </div>
    <ul className="grid grid-cols-2 gap-y-7 mx-3 mb-3">
      {info.options.map((x) => (
        <Option
          key={x.optionId}
          color={`${x.isCorrect ? "bg-turquoise" : "bg-pink-400"}`}
        >
          {x.value}
        </Option>
      ))}
    </ul>
  </li>
);

const Option = ({ children, color }) => (
  <li className="flex items-center gap-x-3 text-sm">
    <span className={`inline-block w-3 h-3 rounded-full ${color}`}></span>
    {children}
  </li>
);
