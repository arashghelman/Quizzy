import React, { useEffect, forwardRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import { supabase } from "../../supabaseClient";
import { useAPI } from "../../hooks/useAPI";
import Form from "../shared/Form";
import TextField from "../shared/TextField/TextField";
import ItemsSelection from "../shared/ItemsSelection";
import Spinner from "../shared/Spinner/Spinner";
import Button from "../shared/Button";

const QuizForm = ({ defaultValues }) => {
  const { register, control, getValues, setValue, handleSubmit, reset } =
    useForm({
      defaultValues: {
        name: "",
        description: "",
        isPublic: false,
        subjects: [],
        minGradeId: {},
        maxGradeId: {},
      },
    });

  const {
    data: subjects,
    error: subjectsError,
    isLoading: areSubjectsLoading,
  } = useAPI(
    async () =>
      await supabase.from("subjects").select("subjectId:subject_id,name")
  );

  const {
    data: grades,
    error: gradesError,
    isLoading: areGradesLoading,
  } = useAPI(
    async () => await supabase.from("grades").select("gradeId:grade_id,name")
  );

  const isPublic = useWatch({ control, name: "isPublic" });
  const quizSubjects = useWatch({ control, name: "subjects" });
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

  const handleFormSubmit = (data) => console.log(data);

  const gradeOptions = grades?.map((grade) => ({
    ...grade,
    id: grade.gradeId,
  }));

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      {areSubjectsLoading && areGradesLoading && <Spinner />}
      {subjects && grades && (
        <div className="grid gap-10 text-left mb-3">
          <div className="grid grid-cols-2 gap-5">
            <Button
              type="add"
              variant="add"
              custom="rounded-md text-2xl border-gray-300"
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
              <ToggleSwitch id="isPublic" {...register("isPublic")} />
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
              <Select
                options={gradeOptions}
                defaultValue={minGradeId}
                onSelect={handleGradeSelect("minGradeId")}
              />
              <Select
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
};

export default QuizForm;

const Title = ({ children }) => (
  <span className="text-blue-1000 text-base">{children}</span>
);

const ToggleSwitch = forwardRef(({ id, defaultChecked, ...rest }, ref) => {
  return (
    <label htmlFor={id} className="inline-block cursor-pointer">
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        ref={ref}
        {...rest}
        className="hidden peer"
      />
      <div
        className="relative w-12 h-7 rounded-full bg-gray-200 duration-300 
          after:content-[''] after:top-[2px] after:left-[2px] after:absolute 
          after:w-6 after:h-6 after:rounded-full after:bg-white after:shadow-md 
          after:duration-300 active:after:w-8 peer-checked:bg-emerald-400 
          peer-checked:after:left-[calc(100%-2px)] transform peer-checked:after:-translate-x-full"
      ></div>
    </label>
  );
});

const Select = ({ options, defaultValue, name, onSelect }) => (
  <div
    className="group relative flex items-center justify-between border-1 rounded-full 
      border-gray-300 hover:border-blue-400 focus-within:border-blue-400
      text-gray-400 hover:text-blue-500 focus-within:text-blue-500 cursor-pointer"
  >
    <select
      name={name}
      defaultValue={defaultValue}
      onChange={onSelect}
      className="w-full px-5 py-2 bg-transparent focus:outline-none appearance-none cursor-pointer"
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    <i className="absolute right-3.5 text-xl focus-within:text-blue-500 -z-1 ri-arrow-down-s-line"></i>
  </div>
);
