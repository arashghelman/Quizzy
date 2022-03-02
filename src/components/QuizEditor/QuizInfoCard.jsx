import React from "react";
import InfoItem from "../shared/InfoItem";
import QuizSubjects from "../shared/QuizSubjects";
import EditText from "../shared/EditText";
import Button from "../shared/Button";
import QuizGrades from "../shared/QuizGrades";
import InfoHeading from "../shared/InfoHeading";

const QuizInfoCard = ({ info, onEdit }) => {
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
      <Thumbnail url={thumbnailUrl} />
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
};

export default QuizInfoCard;

const Thumbnail = ({ url }) => (
  <section className="border-1 border-dashed border-gray-300 rounded-sm ml-5 w-80 max-w-7xl group">
    {url ? (
      <div className="relative h-full bg-gray-100">
        <Button
          icon="ri-delete-bin-line"
          custom="absolute top-2.5 right-2.5 w-7 h-7 bg-red-200 text-red-500 text-base border-none"
        />
        <img
          className="h-full rounded-sm object-cover"
          src={url}
          alt="Thumbnail"
        />
      </div>
    ) : (
      <div
        className="flex flex-col justify-center items-center h-full 
            gap-y-6 bg-gray-100 text-blue-1000 cursor-pointer group-hover:opacity-70"
      >
        <i className="pr-px text-2xl ri-image-add-fill transform duration-100 group-hover:scale-110"></i>
        <span className="text-sm text-gray-500">
          Click here to add a quiz thumbnail
        </span>
      </div>
    )}
  </section>
);
