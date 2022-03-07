import React, { useEffect } from "react";
import { useSelect } from "react-supabase";
import { useForm, useWatch } from "react-hook-form";
import { supabase } from "supabaseClient";
import { bucketBaseUrl } from "constants/supabaseConstants";
import Form from "@components/Form";
import TextField from "@components/TextField/TextField";
import ItemsSelection from "@components/ItemsSelection";
import GradeSelect from "./GradeSelect";
import VisibilitySwitch from "./VisibilitySwitch";
import ThumbnailFileInput from "./ThumbnailFileInput";
import Spinner from "@components/Spinner/Spinner";

export default function QuizEditForm({ defaultValues }) {
  const { register, control, getValues, setValue, handleSubmit, reset } =
    useForm({
      defaultValues: {
        name: "",
        description: "",
        isPublic: false,
        subjects: [],
        minGradeId: {},
        maxGradeId: {},
        thumbnailUrl: "",
      },
    });

  const [{ data: subjects, fetching: areSubjectsFetching }] = useSelect(
    "subjects",
    { columns: "subjectId:subject_id,name" }
  );

  const [{ data: grades, fetching: areGradesFetching }] = useSelect("grades", {
    columns: "gradeId:grade_id,name",
  });

  const isPublic = useWatch({ control, name: "isPublic" });
  const quizSubjects = useWatch({ control, name: "subjects" });
  const thumbnailUrl = useWatch({ control, name: "thumbnailUrl" });
  const minGradeId = getValues("minGradeId");
  const maxGradeId = getValues("maxGradeId");

  useEffect(
    () => defaultValues && reset(defaultValues),
    [defaultValues, reset]
  );

  const handleSubjectCheck = (idToCheck) => {
    const prevSelectedId = quizSubjects.find((s) => s === idToCheck);
    if (prevSelectedId !== undefined) {
      const index = quizSubjects.indexOf(prevSelectedId);
      quizSubjects.splice(index, 1);
      setValue("subjects", quizSubjects);

      return;
    }

    if (quizSubjects.length >= 3) {
      quizSubjects.shift();
      setValue("subjects", quizSubjects);
    }

    quizSubjects.push(idToCheck);
    setValue("subjects", quizSubjects);
  };

  const handleGradeSelect = (propName) => (e) => {
    const gradeId = e.target.value;
    setValue(propName, gradeId);
  };

  const handleThumbnailUpload = async (e) => {
    const file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("thumbnails")
      .upload(`${Date.now()}_${file.name}`, file);

    if (data) {
      const url = bucketBaseUrl + data.Key;
      setValue("thumbnailUrl", url);
    }
  };

  const handleFormSubmit = (data) => console.log(data);

  const gradeOptions = grades?.map((grade) => ({
    ...grade,
    id: grade.gradeId,
  }));

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      {areSubjectsFetching && areGradesFetching && <Spinner />}
      {subjects && grades && (
        <div className="grid gap-10 text-left mb-3">
          <div className="grid grid-cols-2 gap-5">
            <ThumbnailFileInput
              url={thumbnailUrl}
              onChange={handleThumbnailUpload}
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
              <VisibilitySwitch id="isPublic" {...register("isPublic")} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Title>Subjects</Title>
            <ItemsSelection
              items={subjects.map((subject) => ({
                ...subject,
                id: subject.subjectId,
                isSelected: quizSubjects.find((s) => s === subject.subjectId)
                  ? true
                  : false,
              }))}
              onSelect={handleSubjectCheck}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Title>Grades</Title>
            <div className="grid grid-cols-2 gap-5">
              <GradeSelect
                options={gradeOptions}
                defaultValue={minGradeId}
                onSelect={handleGradeSelect("minGradeId")}
              />
              <GradeSelect
                options={gradeOptions}
                defaultValue={maxGradeId}
                onSelect={handleGradeSelect("maxGradeId")}
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
