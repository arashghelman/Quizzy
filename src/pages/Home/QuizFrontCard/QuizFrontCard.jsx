import React from "react";
import { bookIcon, starIcon, playIcon, editIcon } from "constants/uiConstants";
import { useNavigate } from "react-router-dom";
import Card from "@components/Card";
import * as QuizInfo from "@components/QuizInfo";
import Button from "@components/Button/Button";

export default function QuizFrontCard({ data }) {
  const {
    quizId,
    name,
    subjects,
    minGrade,
    maxGrade,
    thumbnailUrl,
    description,
  } = data;

  const navigate = useNavigate();

  const handlePlay = (id) => navigate(`player/${id}`);

  const handleEdit = (id) => navigate(`editor/${id}`);

  return (
    <Card layout="text-left p-5">
      <div className="grid grid-cols-1 gap-6">
        <QuizInfo.Thumbnail url={thumbnailUrl} />
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center">
            <QuizInfo.Heading heading={name} fontSize="sm" />
            <div className="flex gap-3">
              <Button icon={playIcon} onClick={() => handlePlay(quizId)}>
                Play
              </Button>
              <Button icon={editIcon} onClick={() => handleEdit(quizId)} />
            </div>
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
