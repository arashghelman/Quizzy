import React from "react";
import InfoItem from "../../shared/InfoItem";
import Thumbnail from "./Thumbnail";
import QuizSubjectsList from "../../shared/QuizSubjectsList";
import EditText from "../../shared/EditText";
import Button from "../../shared/Button";
import QuizGrades from "../../shared/QuizGrades";
import InfoHeading from "../../shared/InfoHeading";

export default function QuizInfoCard({ data, onClickEdit }) {
  const { name, isPublic, subjects, grade, description, thumbnail } = data;

  return (
    <section className="rounded-md shadow-md grid grid-flow-col bg-white py-6">
      <Thumbnail url={thumbnail} />
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
            <QuizSubjectsList data={subjects} custom="flex" />
          </InfoItem>
          <InfoItem icon="ri-star-line">
            <QuizGrades data={grade} />
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
