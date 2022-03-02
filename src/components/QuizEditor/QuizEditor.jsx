import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useAPI } from "../../hooks/useAPI";
import QuizInfoCard from "./QuizInfoCard";
import QuizQualityCard from "./QuizQualityCard";
import QuestionsList from "./QuestionsList";
import Modal from "../shared/Modal";
import QuizForm from "./QuizForm";
import QuestionForm from "./QuestionForm";
import Spinner from "../shared/Spinner/Spinner";

export default function QuizEditor() {
  const {
    data: quiz,
    error: quizError,
    isLoading: isQuizLoading,
  } = useAPI(
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
  } = useAPI(
    async () =>
      await supabase
        .from("quiz_questions")
        .select("quizId:quiz_id,questionId:question_id,title,options")
        .eq("quiz_id", "cbaa6ddd-435e-4ec4-a6a5-969dd2e93d2f")
  );

  const [modalStatus, setModalStatus] = useState({
    title: "",
    content: null,
    isActive: false,
  });

  const quizFormDefaultValues = quiz && {
    quizId: quiz.quizId,
    name: quiz.name,
    isPublic: quiz.isPublic,
    description: quiz.description,
    subjects: quiz.subjects.map((subject) => subject.subjectId),
    minGradeId: quiz.minGrade.gradeId,
    maxGradeId: quiz.maxGrade.gradeId,
  };

  const handleQuizEdit = () =>
    setModalStatus({
      title: "Edit quiz",
      content: <QuizForm defaultValues={quizFormDefaultValues} />,
      isActive: true,
    });

  const handleQuestionAdd = () =>
    setModalStatus({
      title: "Add question",
      content: <QuestionForm defaultValues={null} />,
      isActive: true,
    });

  const handleQuestionEdit = (id) =>
    setModalStatus({
      title: "Edit question",
      content: (
        <QuestionForm
          defaultValues={questions.find(
            (question) => question.questionId === id
          )}
        />
      ),
      isActive: true,
    });

  const handleModalClose = () =>
    setModalStatus({ title: "", content: null, isActive: false });

  const quizQuality = {
    hasName: quiz?.name != null,
    hasThumbnail: quiz?.thumbnailUrl != null,
    hasGrades: quiz?.maxGrade != null && quiz.minGrade != null,
    hasDescription: quiz?.description != null,
    hasEnoughQuestions: questions?.length >= 4,
  };

  return (
    <>
      {isQuizLoading && areQuestionsLoading && <Spinner />}
      {quiz && questions && (
        <div className="grid grid-cols-3 gap-x-10 py-20">
          <div className="col-span-2">
            <QuizInfoCard info={quiz} onEdit={handleQuizEdit} />
          </div>
          <div className="col-span-1">
            <QuizQualityCard quality={quizQuality} />
          </div>
          <div className="col-span-3">
            <QuestionsList
              listData={questions}
              onItemEdit={handleQuestionEdit}
              onItemAdd={handleQuestionAdd}
            />
          </div>
          {modalStatus.isActive && (
            <Modal title={modalStatus.title} onClose={handleModalClose}>
              {modalStatus.content}
            </Modal>
          )}
        </div>
      )}
    </>
  );
}
