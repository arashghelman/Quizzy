import React from "react";
import { bookIcon, starIcon, playIcon } from "constants/uiConstants";
import Card from "@components/Card";
import * as QuizInfo from "@components/QuizInfo";
import Button from "@components/Button/Button";

export default function QuizFrontCard({ data }) {
  const { name, subjects, minGrade, maxGrade, thumbnailUrl, description } =
    data;

  return (
    <Card layout="text-left p-5">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <QuizInfo.Thumbnail url={thumbnailUrl} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center">
            <QuizInfo.Heading heading={name} fontSize="sm" />
            <Button icon={playIcon}>Play</Button>
          </div>
          <div className="flex flex-col">
            <QuizInfo.Item icon={bookIcon}>
              <QuizInfo.Subjects subjects={subjects} />
            </QuizInfo.Item>
            {minGrade && maxGrade && (
              <QuizInfo.Item icon={starIcon}>
                <QuizInfo.Grades minGrade={minGrade} maxGrade={maxGrade} />
              </QuizInfo.Item>
            )}
            {description && <QuizInfo.Description text={description} />}
          </div>
        </div>
      </div>
    </Card>
  );
}
