import React from "react";
import { serverError } from "@constants/errors";
import { useSelect, useFilter } from "react-supabase";
import { useParams } from "react-router";
import { useCounter } from "./useCounter";
import { useAnswers } from "./useAnswers";
import ProgressBar from "@components/ProgressBar";
import Message from "@components/Message";
import Slider from "./Slider";
import QuestionCard from "./QuestionCard";
import AnswerResult from "./AnswerResult";
import QuizResult from "./QuizResult";
import Spinner from "@components/Spinner";

export default function QuizPlayer() {
  const { quizId } = useParams();

  const { counter, increment } = useCounter(0);

  const [{ count: questionsCount, data: questions, error, fetching }] =
    useSelect("quiz_questions", {
      columns: "questionId:question_id,title,options",
      filter: useFilter((query) => query.eq("quiz_id", quizId)),
      options: { count: "exact" },
    });

  const { answers, result, select, setQuizResult } = useAnswers(questions);

  const cards = questions?.map((question, index) => (
    <QuestionCard
      key={question.questionId}
      data={{
        ...question,
        number: ++index,
        isAnswered: answers?.find((a) => a.questionId === question.questionId)
          .optionId,
      }}
      backSide={
        result ? (
          <QuizResult result={result} />
        ) : (
          <AnswerResult
            succeeded={
              answers?.find((a) => a.questionId === question.questionId)
                .isCorrect
            }
            correctAnswer={question.options.find((o) => o.isCorrect).value}
            action={
              counter + 1 === questionsCount
                ? { title: "See Results", handler: () => setQuizResult() }
                : { title: "Next", handler: () => increment() }
            }
          />
        )
      }
      onOptionCheck={select}
    />
  ));

  return (
    <>
      {fetching && <Spinner />}
      {error && <Message text={serverError} />}
      {questions && (
        <div className="flex flex-col h-full py-10">
          <div className="w-1/2 flex flex-col gap-3 self-center">
            <ProgressBar
              value={counter + 1}
              max={questionsCount}
              color="bg-emerald-400"
              custom="h-[12px]"
            />
            <span className="text-blue-1000">
              {counter + 1} / {questionsCount}
            </span>
          </div>
          <form className="flex justify-center items-center h-full">
            <Slider items={cards} counter={counter} />
          </form>
        </div>
      )}
    </>
  );
}
