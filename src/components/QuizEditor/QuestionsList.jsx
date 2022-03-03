import React from "react";
import { useDelete } from "react-supabase";
import List from "../shared/List";
import Button from "../shared/Button";
import Spinner from "../shared/Spinner/Spinner";

const QuestionsList = ({ listData, onItemAction, onReload }) => {
  const [{ fetching }, execute] = useDelete("quiz_questions");

  const handleItemRemove = async (idToRemove) => {
    const shouldRemove = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (!shouldRemove) return;

    await execute((query) => query.eq("question_id", idToRemove));
    await onReload();
  };

  return (
    <List
      heading="Questions"
      subHeading="List of questions in my quiz"
      gap="gap-8"
    >
      {listData.map((question, index) => (
        <QuestionInfoCard
          key={question.questionId}
          info={{ ...question, number: ++index }}
          onEdit={() => onItemAction(question.questionId)}
          onRemove={() => handleItemRemove(question.questionId)}
        />
      ))}
      <Button
        type="button"
        variant="add"
        custom="bg-gray-50 rounded-md text-3xl"
        onClick={() => onItemAction(null)}
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
