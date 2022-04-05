import React from "react";
import { useSelect } from "react-supabase";
import { useAddForm } from "./useAddForm";
import Spinner from "@components/Spinner";
import TextField from "@components/TextField";
import Form from "@components/Form";
import * as QuizFrom from "@components/QuizForm";

export default function QuizAddForm() {
  const [{ data: fetchedSubjects, fetching }] = useSelect("subjects", {
    columns: "subjectId:subject_id,name",
  });

  const [
    register,
    { submit, isSubmitting },
    { error },
    { subjects, selectSubject },
  ] = useAddForm();

  const subjectItems = fetchedSubjects?.map((subject) => ({
    ...subject,
    id: subject.subjectId,
    isSelected: subjects.find((s) => s === subject.subjectId) ? true : false,
  }));

  return (
    <>
      {fetching && (
        <div className="mb-6">
          <Spinner />
        </div>
      )}
      {fetchedSubjects && (
        <Form isSubmitting={isSubmitting} error={error} onSubmit={submit}>
          <TextField label="Quiz name" {...register("name")} />
          <div className="text-left flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <QuizFrom.Title>Subjects</QuizFrom.Title>
              <span className="text-sm text-slate-400">
                Choose relevant subjects for better content suggestion.
              </span>
            </div>
            <QuizFrom.SubjectsSelection
              subjects={subjectItems}
              onSelect={selectSubject}
            />
          </div>
        </Form>
      )}
    </>
  );
}
