import React from "react";
import { addIcon } from "@constants/uiConstants";
import { serverError } from "@constants/errors";
import { useModal } from "@hooks/";
import { useSearch } from "./useSearch";
import Button from "@components/Button";
import List from "@components/List";
import Message from "@components/Message";
import SearchForm from "./SearchForm";
import QuizFrontCard from "./QuizFrontCard";
import QuizAddFrom from "./QuizAddForm";

export default function Home() {
  const { modal, triggerModal } = useModal();

  const handleQuizAdd = () => triggerModal("Add quiz", <QuizAddFrom />);

  const [register, { keyword, data, error, isLoading }, execute] = useSearch();

  const quizzes = data?.map((quiz) => (
    <QuizFrontCard
      key={quiz.quizId}
      data={{
        ...quiz,
        subjects: quiz.subjects.map((subject) => subject.name),
        minGrade: quiz.minGrade?.name,
        maxGrade: quiz.maxGrade?.name,
      }}
    />
  ));

  return (
    <div className="mx-32 h-full">
      {error && <Message text={serverError} />}
      <div className="py-10 flex flex-col gap-20">
        <div className="flex">
          <SearchForm
            {...register("search", { onChange: execute })}
            isSearching={isLoading}
          />
          <div className="w-1/6 ml-10 flex justify-center items-center">
            <Button icon={addIcon} variant="greenish" onClick={handleQuizAdd}>
              Add quiz
            </Button>
          </div>
        </div>
        <div>
          <List
            heading={
              keyword ? `Search results for: ${keyword}` : "Latest quizzes"
            }
            layout="grid-cols-3 gap-9"
          >
            {quizzes}
          </List>
        </div>
      </div>
      {modal}
    </div>
  );
}
