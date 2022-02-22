import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useAPI } from "../../hooks/useAPI";
import ProgressBar from "../shared/ProgressBar";
import Slider from "./Slider/Slider";
import Slide from "./Slider/Slide";
import QuestionCard from "./QuestionCard/QuestionCard";
import Spinner from "../shared/Spinner/Spinner";

export default function QuizPlayer() {
  const { data, error, isLoading } = useAPI(
    async () =>
      await supabase
        .from("quiz_questions")
        .select("questionId:question_id,title,options")
        .eq("quiz_id", "cbaa6ddd-435e-4ec4-a6a5-969dd2e93d2f")
  );

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const updatedData = data?.map((x) => ({
      ...x,
      isAnswered: false,
      options: x.options.map((o) => ({ ...o })),
    }));
    setQuestions(updatedData);
  }, [data]);

  const numberOfQuestions = questions?.length;

  const [counter, setCounter] = useState(0);

  const slides = questions?.map((x, i) => (
    <Slide
      key={x.questionId}
      state={
        i === counter && !x.isAnswered
          ? "current"
          : x.isAnswered
          ? "prev"
          : "next"
      }
    >
      <QuestionCard data={{ ...x, number: ++i }} />
    </Slide>
  ));

  return (
    <>
      {isLoading && <Spinner />}
      {questions && (
        <div className="flex flex-col h-full">
          <div className="w-1/2 flex flex-col gap-3 self-center">
            <ProgressBar
              value="2"
              max={numberOfQuestions}
              color="bg-emerald-400"
              custom="h-[12px]"
            />
            <span className="text-blue-1000">2 / {numberOfQuestions}</span>
          </div>
          <form className="flex justify-center items-center h-full">
            <Slider>{slides}</Slider>
          </form>
        </div>
      )}
    </>
  );
}
