import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useSupabase } from "../../hooks/useSupabase";
import QuizInfoCard from "./QuizInfoCard/QuizInfoCard";
import QuizQualityCard from "./QuizQualityCard/QuizQualityCard";
import List from "../shared/List";
import EditQuizMenu from "./EditQuizMenu/EditQuizMenu";
import Sidebar from "../shared/Sidebar";
import Button from "../shared/Button";
import QuestionCard from "./QuestionCard/QuestionCard";
import Modal from "../shared/Modal";
import QuestionForm from "./QuestionForm/QuestionForm";
import Spinner from "../shared/Spinner/Spinner";

export default function QuizEditor() {
  const {
    data: quiz,
    error: quizError,
    isLoading: isQuizLoading,
  } = useSupabase(
    async () =>
      await supabase
        .from("quizzes")
        .select(
          `quizId:quiz_id,name,isPublic:is_public,
          thumbnailUrl:thumbnail_url,description,subjects(subjectId:subject_id,name),
          minGrade:min_grade_id(gradeId:grade_id,name),
          maxGrade:max_grade_id(gradeId:grade_id,name)`
        )
        .eq("quiz_id", "cbaa6ddd-435e-4ec4-a6a5-969dd2e93d2f")
        .single()
  );

  const {
    data: questions,
    error: questionsError,
    isLoading: areQuestionsLoading,
  } = useSupabase(
    async () =>
      await supabase
        .from("quiz_questions")
        .select("quizId:quiz_id,questionId:question_id,title,options")
        .eq("quiz_id", "cbaa6ddd-435e-4ec4-a6a5-969dd2e93d2f")
  );

  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const handleClickEditQuiz = () => setIsMenuClosed(false);

  const handleClickCloseMenu = () => setIsMenuClosed(true);

  const [modal, setModal] = useState({ title: "", data: null, isClosed: true });

  const handleClickAddQuestion = () =>
    setModal((current) => ({
      ...current,
      title: "Add question",
      isClosed: false,
    }));

  const handleClickEditQuestion = (id) =>
    setModal({
      title: "Edit question",
      data: questions.find((x) => x.questionId === id),
      isClosed: false,
    });

  const handleClickCloseModal = () =>
    setModal((current) => ({ ...current, data: null, isClosed: true }));

  const quizStatus = {
    hasName: quiz?.name != null,
    hasThumbnail: quiz?.thumbnailUrl != null,
    hasGrades: quiz?.maxGrade != null && quiz.minGrade != null,
    hasDescription: quiz?.description != null,
    hasEnoughQuestions: questions?.length >= 4,
  };

  return (
    <>
      {isQuizLoading && areQuestionsLoading && (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      )}
      {quiz && questions && (
        <div className="grid grid-cols-3 gap-x-10">
          <div className="col-span-2">
            <QuizInfoCard data={quiz} onClickEdit={handleClickEditQuiz} />
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
                  key={x.questionId}
                  number={++i}
                  data={x}
                  onClickEdit={() => handleClickEditQuestion(x.questionId)}
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
          {modal.isClosed ? null : (
            <Modal title={modal.title} onClickClose={handleClickCloseModal}>
              <QuestionForm data={modal.data} />
            </Modal>
          )}
          {isMenuClosed ? null : (
            <Sidebar>
              <EditQuizMenu data={quiz} onClickClose={handleClickCloseMenu} />
            </Sidebar>
          )}
        </div>
      )}
    </>
  );
}
