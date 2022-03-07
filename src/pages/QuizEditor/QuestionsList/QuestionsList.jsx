import React from "react";
import { useDelete } from "react-supabase";
import List from "@components/List";
import Button from "@components/Button";
import QuestionInfoCard from "./QuestionInfoCard";

export default function QuestionsList({ listData, onItemAction, onReload }) {
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
}
