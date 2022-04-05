import React from "react";
import { editIcon, removeIcon, loaderIcon } from "@constants/uiConstants";
import { useDelete } from "react-supabase";
import { useNavigate } from "react-router";
import Card from "@components/Card";
import * as QuizInfo from "@components/QuizInfo";
import EditText from "@components/EditText";
import Button from "@components/Button";

export default function QuizInfoCard({ info, onEdit }) {
  const {
    quizId,
    name,
    isPublic,
    subjects,
    minGrade,
    maxGrade,
    description,
    thumbnailUrl,
  } = info;

  const navigate = useNavigate();

  const [{ isDeletingSubjects }, deleteSubjects] = useDelete("quiz_subjects");

  const [{ isDeletingQuiz }, deleteQuiz] = useDelete("quizzes");

  const handleRemove = async () => {
    const shouldRemove = window.confirm(
      "Are you sure you want to delete this quiz?"
    );

    if (!shouldRemove) return;

    const { subjectsError } = await deleteSubjects((query) =>
      query.eq("quiz_id", quizId)
    );
    if (subjectsError) return;

    const { quizError } = await deleteQuiz((query) =>
      query.eq("quiz_id", quizId)
    );
    if (quizError) return;

    navigate("/");
  };

  return (
    <Card layout="grid grid-flow-col py-6">
      <div className="ml-5 border-1 border-gray-300 border-dashed rounded-sm h-full">
        <QuizInfo.Thumbnail url={thumbnailUrl} />
      </div>
      <div className="px-8 flex flex-col text-left">
        <div className="flex justify-between items-start">
          <QuizInfo.Heading
            heading={name}
            subHeading={isPublic ? "Public" : "Private"}
          />
          <div className="flex gap-3">
            <Button icon={editIcon} onClick={onEdit}>
              Edit
            </Button>
            <Button
              icon={isDeletingQuiz ? loaderIcon : removeIcon}
              onClick={handleRemove}
            />
          </div>
        </div>
        <ul className="mt-7">
          <QuizInfo.Item icon="ri-book-line">
            {subjects ? (
              <QuizInfo.Subjects
                subjects={subjects.map((subject) => subject.name)}
              />
            ) : (
              <EditText onClick={onEdit}>Click here to add subjects</EditText>
            )}
          </QuizInfo.Item>
          <QuizInfo.Item icon="ri-star-line">
            {minGrade && maxGrade ? (
              <QuizInfo.Grades
                minGrade={minGrade.name}
                maxGrade={maxGrade.name}
              />
            ) : (
              <EditText onClick={onEdit}>Click here to add grades</EditText>
            )}
          </QuizInfo.Item>
        </ul>
        <div className="w-[380px] h-[84px] text-gray-500 text-sm">
          {description ? (
            <QuizInfo.Description text={description} />
          ) : (
            <EditText onClick={onEdit}>
              Click here to write a description.
            </EditText>
          )}
        </div>
      </div>
    </Card>
  );
}
