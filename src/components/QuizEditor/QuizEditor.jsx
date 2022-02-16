import React, { useState } from "react";
import QuizInfoCard from "./QuizInfoCard/QuizInfoCard";
import QuizQualityCard from "./QuizQualityCard/QuizQualityCard";
import List from "../shared/List";
import EditQuizMenu from "./EditQuizMenu/EditQuizMenu";
import Sidebar from "../shared/Sidebar";
import Button from "../shared/Button";
import QuestionCard from "./QuestionCard/QuestionCard";
import Modal from "../shared/Modal";
import QuestionForm from "./QuestionForm/QuestionForm";
import { quizInfo, questions } from "./fakeData";

export default function QuizEditor() {
  const [isEditQuizMenuClosed, setIsEditQuizMenuClosed] = useState(true);
  const handleClickEditQuiz = () => setIsEditQuizMenuClosed(false);
  const handleClickCloseEditQuizMenu = () => setIsEditQuizMenuClosed(true);

  const [questionModalStatus, setQuestionModalStatus] = useState({
    title: "",
    data: null,
    isClosed: true,
  });
  const handleClickAddQuestion = () =>
    setQuestionModalStatus({
      title: "Add question",
      data: null,
      isClosed: false,
    });
  const handleClickEditQuestion = (id) =>
    setQuestionModalStatus({
      title: "Edit question",
      data: questions.find((x) => x.id === id),
      isClosed: false,
    });
  const handleClickCloseQuestionModal = () =>
    setQuestionModalStatus({ title: "", data: null, isClosed: true });

  const quizStatus = {
    hasName: quizInfo.name != null,
    hasThumbnail: quizInfo.thumbnail != null,
    hasGrades: quizInfo.grade != null,
    hasDescription: quizInfo.description != null,
    hasEnoughQuestions: questions.length >= 4,
  };

  return (
    <div className="grid grid-cols-3 gap-x-10">
      <div className="col-span-2">
        <QuizInfoCard data={quizInfo} onClickEdit={handleClickEditQuiz} />
      </div>
      <div className="col-span-1">
        <QuizQualityCard status={quizStatus} />
      </div>
      <div className="col-span-3">
        <List
          heading="Quizzes"
          subHeading="List of questions in my quiz"
          gap="gap-x-8 gap-y-7"
        >
          {questions.map((x, i) => (
            <QuestionCard
              key={x.id}
              number={++i}
              data={x}
              onClickEdit={() => handleClickEditQuestion(x.id)}
            />
          ))}
          <Button
            type="button"
            variant="add"
            custom="bg-gray-50 rounded-md text-3xl"
            onClick={handleClickAddQuestion}
          />
        </List>
      </div>
      <Modal
        title={questionModalStatus.title}
        closed={questionModalStatus.isClosed}
        onClickClose={handleClickCloseQuestionModal}
      >
        <QuestionForm data={questionModalStatus.data} />
      </Modal>
      <Sidebar closed={isEditQuizMenuClosed}>
        <EditQuizMenu
          data={quizInfo}
          onClickClose={handleClickCloseEditQuizMenu}
        />
      </Sidebar>
    </div>
  );
}
