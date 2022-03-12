import { useFilter } from "react-supabase";
import { useModal } from "@hooks";
import { useData } from "./useData";
import { serverError } from "@constants/errors";
import QuizInfoCard from "./QuizInfoCard";
import QuizQualityCard from "./QuizQualityCard";
import QuestionsList from "./QuestionsList";
import QuizEditForm from "./QuizEditForm/QuizEditForm";
import QuestionForm from "./QuestionForm";
import Spinner from "@components/Spinner";
import Message from "@components/Message";

export default function QuizEditor() {
  const quizId = "cbaa6ddd-435e-4ec4-a6a5-969dd2e93d2f";

  const {
    data: quiz,
    error: quizError,
    isLoading: isQuizLoading,
    loadData: loadQuiz,
  } = useData(
    "quizzes",
    `quizId:quiz_id,name,isPublic:is_public,
      thumbnailUrl:thumbnail_url,description,subjects(subjectId:subject_id,name),
      minGrade:min_grade_id(gradeId:grade_id,name),
      maxGrade:max_grade_id(gradeId:grade_id,name)`,
    useFilter(
      (query) => query.eq("quiz_id", quizId, [quizId]).single(),
      [quizId]
    )
  );

  const {
    data: questions,
    error: questionsError,
    isLoading: areQuestionsLoading,
    loadData: loadQuestions,
  } = useData(
    "quiz_questions",
    "quizId:quiz_id,questionId:question_id,title,options",
    useFilter((query) => query.eq("quiz_id", quizId), [quizId])
  );

  const { modal, triggerModal } = useModal();

  const quizFormDefaultValues = quiz && {
    quizId: quiz.quizId,
    name: quiz.name,
    isPublic: quiz.isPublic,
    description: quiz.description,
    subjects: quiz.subjects.map((subject) => subject.subjectId),
    minGradeId: quiz.minGrade.gradeId,
    maxGradeId: quiz.maxGrade.gradeId,
    thumbnailUrl: quiz.thumbnailUrl,
  };

  const handleQuizEdit = () =>
    triggerModal(
      "Edit Quiz",
      <QuizEditForm
        defaultValues={quizFormDefaultValues}
        onReload={() => loadQuiz()}
      />
    );

  const handleQuestionAction = (id) =>
    triggerModal(
      id === null ? "Add Question" : "Edit Question",
      <QuestionForm
        defaultValues={
          id === null
            ? { quizId }
            : questions.find((question) => question.questionId === id)
        }
        onReload={() => loadQuestions()}
      />
    );

  const quizQuality = quiz &&
    questions && {
      hasName: quiz.name != null,
      hasThumbnail: quiz.thumbnailUrl != null,
      hasGrades: quiz.maxGrade != null && quiz.minGrade != null,
      hasDescription: quiz.description != null,
      hasEnoughQuestions: questions.length >= 4,
    };

  return (
    <>
      {isQuizLoading && areQuestionsLoading && <Spinner />}
      {(quizError || questionsError) && <Message text={serverError} />}
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
              onReload={() => loadQuestions()}
            />
          </div>
        </div>
      )}
      {modal}
    </>
  );
}
