import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useAPI } from "../../hooks/useAPI";
import ProgressBar from "../shared/ProgressBar";
import Slider from "./Slider";
import QuestionCard from "./QuestionCard";
import Result from "./Result";
import Spinner from "../shared/Spinner/Spinner";

export default function QuizPlayer() {
  const [answers, setAnswers] = useState([]);

  const [counter, setCounter] = useState(0);

  const [score, setScore] = useState(0);

  const {
    data: questions,
    error,
    isLoading,
  } = useAPI(
    async () =>
      await supabase
        .from("quiz_questions")
        .select("questionId:question_id,title,options")
        .eq("quiz_id", "cbaa6ddd-435e-4ec4-a6a5-969dd2e93d2f")
  );

  useEffect(() => {
    const answers = questions?.map((q) => ({
      questionId: q.questionId,
      optionId: "",
      isCorrect: false,
    }));
    setAnswers(answers);
  }, [questions]);

  const handleOptionCheck = (questionId, optionId) => {
    const updatedAnswers = answers.map((a) => ({ ...a }));
    const answer = updatedAnswers.find((a) => a.questionId === questionId);
    const isCorrect = questions
      .find((q) => q.questionId === questionId)
      .options?.find((o) => o.optionId === optionId).isCorrect;

    answer.optionId = optionId;
    answer.isCorrect = isCorrect;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => setCounter((prevCounter) => (prevCounter += 1));

  const numberOfQuestions = questions?.length;

  const handleSeeResults = () => {
    let count = 0;
    answers.forEach((a) => a.isCorrect && count++);
    const result = ((100 * count) / numberOfQuestions).toFixed(1);
  };

  const cards = questions?.map((question, index) => (
    <QuestionCard
      key={question.questionId}
      data={{ ...question, number: ++index }}
      backSide={
        <Result
          succeeded={
            answers?.find((a) => a.questionId === question.questionId).isCorrect
          }
          correctAnswer={question.options.find((o) => o.isCorrect).value}
          action={
            counter + 1 === numberOfQuestions
              ? { title: "See Results", handler: handleSeeResults }
              : { title: "Next", handler: handleNext }
          }
        />
      }
      onOptionCheck={handleOptionCheck}
    />
  ));

  return (
    <>
      {isLoading && <Spinner />}
      {questions && (
        <div className="flex flex-col h-full py-10">
          <div className="w-1/2 flex flex-col gap-3 self-center">
            <ProgressBar
              value={counter + 1}
              max={numberOfQuestions}
              color="bg-emerald-400"
              custom="h-[12px]"
            />
            <span className="text-blue-1000">
              {counter + 1} / {numberOfQuestions}
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
