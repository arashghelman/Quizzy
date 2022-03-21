import React from "react";
import { useSelect } from "react-supabase";
import { useEditForm } from "./useEditForm";
import * as QuizForm from "@components/QuizForm";
import Form from "@components/Form/Form";
import TextField from "@components/TextField/TextField";
import Spinner from "@components/Spinner/Spinner";

export default function QuizEditForm({ defaultValues, onReload }) {
  const [
    register,
    { submit, isSubmitting },
    { error },
    { isPublic },
    { subjects, selectSubject },
    { minGradeId, maxGradeId, selectGrade },
    { thumbnailUrl, uploadThumbnail, isUploading },
  ] = useEditForm(defaultValues, async () => await onReload());

  const [{ data: fetchedSubjects, fetching: areSubjectsFetching }] = useSelect(
    "subjects",
    { columns: "subjectId:subject_id,name" }
  );

  const [{ data: fetchedGrades, fetching: areGradesFetching }] = useSelect(
    "grades",
    {
      columns: "gradeId:grade_id,name",
    }
  );

  const gradeOptions = fetchedGrades?.map((grade) => ({
    ...grade,
    id: grade.gradeId,
  }));

  const subjectItems = fetchedSubjects?.map((subject) => ({
    ...subject,
    id: subject.subjectId,
    isSelected: subjects.find((s) => s === subject.subjectId) ? true : false,
  }));

  return (
    <Form isSubmitting={isSubmitting} error={error} onSubmit={submit}>
      {areSubjectsFetching && areGradesFetching && <Spinner />}
      {fetchedSubjects && fetchedGrades && (
        <div className="grid gap-10 text-left mb-3">
          <div className="grid grid-cols-2 gap-5">
            <QuizForm.ThumbnailFileInput
              url={thumbnailUrl}
              isUploading={isUploading}
              {...register("thumbnailUrl", {
                onChange: (e) => uploadThumbnail(e),
              })}
            />
            <div className="grid grid-cols-1 gap-8">
              <TextField id="name" label="Quiz name" {...register("name")} />
              <TextField
                id="description"
                label="Description"
                {...register("description")}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Title>Visibility</Title>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400">
                {isPublic ? "Public" : "Private"}
              </span>
              <QuizForm.VisibilitySwitch
                id="isPublic"
                {...register("isPublic")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Title>Subjects</Title>
            <QuizForm.SubjectsSelection
              subjects={subjectItems}
              onSelect={selectSubject}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Title>Grades</Title>
            <div className="grid grid-cols-2 gap-5">
              <QuizForm.GradeSelect
                options={gradeOptions}
                defaultValue={minGradeId}
                onSelect={selectGrade("minGradeId")}
              />
              <QuizForm.GradeSelect
                options={gradeOptions}
                defaultValue={maxGradeId}
                onSelect={selectGrade("maxGradeId")}
              />
            </div>
          </div>
        </div>
      )}
    </Form>
  );
}

const Title = ({ children }) => (
  <span className="text-blue-1000 text-base">{children}</span>
);
