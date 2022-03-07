import React from "react";
import InfoItem from "@components/InfoItem";
import QuizSubjects from "@components/QuizSubjects";
import EditText from "@components/EditText";
import Button from "@components/Button";
import QuizGrades from "@components/QuizGrades";
import InfoHeading from "@components/InfoHeading";
import QuizThumbnail from "./QuizThumbnail";

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

  return (
    <section className="rounded-md shadow-md grid grid-flow-col bg-white py-6">
      <QuizThumbnail url={thumbnailUrl} onClick={onEdit} />
      <div className="px-8 flex flex-col text-left">
        <div className="flex justify-between items-start">
          <InfoHeading
            heading={name}
            subHeading={isPublic ? "Public" : "Private"}
          />
          <Button icon="ri-pencil-line" onClick={onEdit} custom="py-1">
            Edit
          </Button>
        </div>
        <ul className="mt-7">
          <InfoItem icon="ri-book-line">
            {subjects ? (
              <QuizSubjects data={subjects} />
            ) : (
              <EditText onClick={onEdit}>Click here to add subjects</EditText>
            )}
          </InfoItem>
          <InfoItem icon="ri-star-line">
            {minGrade && maxGrade ? (
              <QuizGrades min={minGrade} max={maxGrade} />
            ) : (
              <EditText onClick={onEdit}>Click here to add grades</EditText>
            )}
          </InfoItem>
        </ul>
        <div className="leading-7 text-sm text-gray-600 w-[380px] h-[84px]">
          {description ? (
            <p>{description}</p>
          ) : (
            <EditText onClick={onEdit}>
              Click here to write a description.
            </EditText>
          )}
        </div>
      </div>
    </section>
  );
}
