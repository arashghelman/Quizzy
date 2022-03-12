import React from "react";
import { addIcon } from "@constants/uiConstants";
import { useDelete } from "react-supabase";
import List from "@components/List";
import Button from "@components/Button";
import QuestionInfoCard from "./QuestionInfoCard";

export default function QuestionsList({ listData, onItemAction, onReload }) {
  const [{}, execute] = useDelete("quiz_questions");

  const handleItemRemove = async (id) => {
    const shouldRemove = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (!shouldRemove) return;

    await execute((query) => query.eq("question_id", id));
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
        icon={addIcon}
        variant="custom"
        customStyle="border-1 border-gray-300 hover:border-blue-400 
          text-gray-300 hover:text-blue-400 bg-slate-50 
          border-dashed rounded-md text-3xl"
        onClick={() => onItemAction(null)}
      />
    </List>
  );
}
