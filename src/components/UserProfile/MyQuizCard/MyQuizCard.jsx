import React from "react";
import InfoItem from "../../shared/InfoItem";
import QuizSubjectsList from "../../shared/QuizSubjectsList";
import QuizGrades from "../../shared/QuizGrades";
import Button from "../../shared/Button";
import InfoHeading from "../../shared/InfoHeading";

export default function MyQuizCard() {
  return (
    <section className="bg-white rounded-md text-left shadow-md p-4">
      <div className="grid grid-cols-3 gap-5">
        <div className="h-full w-full">
          <img
            src="https://blog.hubspot.com/hubfs/google-quiz.jpg"
            alt="thumbnail"
            className="rounded-sm h-full object-cover w-full"
          />
        </div>
        <div className="flex flex-col gap-6 col-span-2">
          <div className="flex items-start justify-between">
            <InfoHeading heading="Lorem ispum" subHeading="Public" size="sm" />
            <div className="flex gap-3">
              <Button icon="ri-pencil-line" custom="w-7 h-7" />
              <Button icon="ri-delete-bin-line" custom="w-7 h-7" />
            </div>
          </div>
          <ul className="justify-self-end">
            <InfoItem icon="ri-book-line">
              <QuizSubjectsList
                data={[
                  { id: "1", name: "Subject1" },
                  { id: "1", name: "Subject1" },
                  { id: "1", name: "Subject1" },
                ]}
                custom="flex text-xs"
              />
            </InfoItem>
            <InfoItem icon="ri-star-line">
              <QuizGrades data={{ min: "1st", max: "12th" }} custom="text-xs" />
            </InfoItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
