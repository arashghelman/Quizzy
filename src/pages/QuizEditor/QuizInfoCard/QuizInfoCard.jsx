import React from "react";
import { editIcon, removeIcon } from "@constants/uiConstants";
import Card from "@components/Card";
import * as QuizInfo from "@components/QuizInfo";
import EditText from "@components/EditText";
import Button from "@components/Button";

export default function QuizInfoCard({ info, onEdit }) {
  const {
    name,
    isPublic,
    subjects,
    minGrade,
    maxGrade,
    description,
    thumbnailUrl,
  } = info;

  const handleRemove = () => {
    const shouldRemove = window.confirm(
      "Are you sure you want to delete this quiz?"
    );

    if (!shouldRemove) return;
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
            <Button icon={removeIcon} onClick={handleRemove} />
          </div>
        </div>
        <ul className="mt-7">
          <QuizInfo.Item icon="ri-book-line">
            {subjects ? (
              <QuizInfo.Subjects
                subjects={subjects.map((subject) => subject.name)}
              />
            ) : null}
          </QuizInfo.Item>
          <QuizInfo.Item icon="ri-star-line">
            {minGrade && maxGrade ? (
              <QuizInfo.Grades
                minGrade={minGrade.name}
                maxGrade={maxGrade.name}
              />
            ) : null}
          </QuizInfo.Item>
        </ul>
        <div className="w-[380px] h-[84px]">
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
