import React from "react";
import InfoItem from "./InfoItem";
import Thumbnail from "./Thumbnail";
import QuizSubjectsList from "../shared/QuizSubjectsList";
import EditText from "./EditText";
import Button from "../../shared/Button";
import QuizGrades from "../shared/QuizGrades";

export default function QuizInfoCard({ data, onClickEdit }) {
  const { name, isPublic, subjects, grade, description, thumbnail } = data;

  return (
    <section className="rounded-md shadow-md grid grid-flow-col bg-white py-6">
      <Thumbnail url={thumbnail} />
      <section className="px-8 flex flex-col text-left">
        <div className="flex justify-between text-blue-1000">
          <div className="text-lg">
            {name ? (
              <h1 className="font-medium">{name}</h1>
            ) : (
              <EditText>Click here to add a name</EditText>
            )}
          </div>
          <Button icon="ri-pencil-line" onClick={onClickEdit}>
            Edit
          </Button>
        </div>
        <span className="my-2 text-sm text-pink-400 font-medium">
          {isPublic ? "Public" : "Private"}
        </span>
        <ul className="mt-5">
          <InfoItem icon="ri-book-line">
            <QuizSubjectsList data={subjects} custom="flex" />
          </InfoItem>
          <InfoItem icon="ri-star-line">
            {grade ? (
              <QuizGrades data={grade} />
            ) : (
              <EditText>Click here to add grades</EditText>
            )}
          </InfoItem>
        </ul>
        <div className="leading-7 text-sm text-gray-600 w-[370px] h-[84px]">
          {description ? (
            <p>{description}</p>
          ) : (
            <EditText>Click here to write a description.</EditText>
          )}
        </div>
      </section>
    </section>
  );
}
