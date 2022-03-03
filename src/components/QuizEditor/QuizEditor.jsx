import React, { useState, useEffect } from "react";
import { useSelect, useFilter } from "react-supabase";
import QuizInfoCard from "./QuizInfoCard";
import QuizQualityCard from "./QuizQualityCard";
import QuestionsList from "./QuestionsList";
import Modal from "../shared/Modal";
import QuizForm from "./QuizForm";
import QuestionForm from "./QuestionForm";
import Spinner from "../shared/Spinner/Spinner";

export default function QuizEditor() {
  const quizId = "cbaa6ddd-435e-4ec4-a6a5-969dd2e93d2f";

  const [quiz, setQuiz] = useState(null);

  const quizFilter = useFilter(
    (query) => query.eq("quiz_id", quizId, [quizId]).single(),
    [quizId]
  );

  const [
    { data: fetchedQuiz, error: quizError, fetching: isQuizFetching },
    fetchQuiz,
  ] = useSelect("quizzes", {
    columns: `quizId:quiz_id,name,isPublic:is_public,
      thumbnailUrl:thumbnail_url,description,subjects(subjectId:subject_id,name),
      minGrade:min_grade_id(gradeId:grade_id,name),
      maxGrade:max_grade_id(gradeId:grade_id,name)`,
    filter: quizFilter,
  });

  const [questions, setQuestions] = useState([]);

  const questionsFilter = useFilter(
    (query) => query.eq("quiz_id", quizId),
    [quizId]
  );

  const [
    {
      data: fetchedQuestions,
      error: questionsError,
      fetching: areQuestionsFetching,
    },
    fetchQuestions,
  ] = useSelect("quiz_questions", {
    columns: "quizId:quiz_id,questionId:question_id,title,options",
    filter: questionsFilter,
  });

  useEffect(() => {
    setQuiz(fetchedQuiz);
    setQuestions(fetchedQuestions);
  }, [fetchedQuiz, fetchedQuestions]);

  const [modalStatus, setModalStatus] = useState({
    title: "",
    content: null,
    isActive: false,
  });

  const handleQuizReload = () => {
    const { data } = fetchQuiz();
    setQuiz(data);
  };

  const handleQuestionsReload = () => {
    const { data } = fetchQuestions();
    setQuestions(data);
  };

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

  const handleQuestionAction = (id) =>
    setModalStatus({
      title: id === null ? "Add Question" : "Edit Question",
      content: (
        <QuestionForm
          defaultValues={
            id === null
              ? { quizId }
              : questions.find((question) => question.questionId === id)
          }
          onReload={handleQuestionsReload}
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
      {isQuizFetching && areQuestionsFetching && <Spinner />}
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
              onItemAction={handleQuestionAction}
              onReload={handleQuestionsReload}
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
