import React from "react";
import InfoItem from "../../shared/InfoItem";
import Thumbnail from "./Thumbnail";
import QuizSubjects from "../../shared/QuizSubjects";
import EditText from "../../shared/EditText";
import Button from "../../shared/Button";
import QuizGrades from "../../shared/QuizGrades";
import InfoHeading from "../../shared/InfoHeading";

export default function QuizInfoCard({ data, onClickEdit }) {
  const {
    name,
    isPublic,
    subjects,
    minGrade,
    maxGrade,
    description,
    thumbnailUrl,
  } = data;

  return (
    <section className="rounded-md shadow-md grid grid-flow-col bg-white py-6">
      <Thumbnail url={thumbnailUrl} />
      <div className="px-8 flex flex-col text-left">
        <div className="flex justify-between items-start">
          <InfoHeading
            heading={name}
            subHeading={isPublic ? "Public" : "Private"}
          />
          <Button icon="ri-pencil-line" onClick={onClickEdit} custom="py-1">
            Edit
          </Button>
        </div>
        <ul className="mt-7">
          <InfoItem icon="ri-book-line">
            <QuizSubjects data={subjects} />
          </InfoItem>
          <InfoItem icon="ri-star-line">
            <QuizGrades min={minGrade} max={maxGrade} />
          </InfoItem>
        </ul>
        <div className="leading-7 text-sm text-gray-600 w-[380px] h-[84px]">
          {description ? (
            <p>{description}</p>
          ) : (
            <EditText>Click here to write a description.</EditText>
          )}
        </div>
      </div>
    </section>
  );
}
