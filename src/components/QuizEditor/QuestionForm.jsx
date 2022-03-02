import React, { useEffect, forwardRef } from "react";
import { supabase } from "../../supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { useForm, useFieldArray } from "react-hook-form";
import Form from "../shared/Form";
import TextField from "../shared/TextField/TextField";
import Button from "../shared/Button";

const QuestionForm = ({ defaultValues }) => {
  const { control, register, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      title: "",
      options: [],
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "options",
  });

  useEffect(
    () => defaultValues && reset(defaultValues),
    [defaultValues, reset]
  );

  const handleAdd = () =>
    append({ optionId: uuidv4(), value: "", isCorrect: false });

  const handleRemove = (indexToRemove) => remove(indexToRemove);

  const handleOptionCheck = (indexToCheck) =>
    getValues("options").forEach((value, index) =>
      update(index, {
        ...value,
        isCorrect: indexToCheck === index ? true : false,
      })
    );

  const handleFormSubmit = async (data) => {
    const dataToSubmit = {
      quiz_id: data.quizId,
      title: data.title,
      options: data.options,
    };

    data.questionId
      ? await supabase
          .from("quiz_questions")
          .upsert({ ...dataToSubmit, question_id: data.questionId })
      : await supabase.from("quiz_questions").insert([dataToSubmit]);
  };

  const formFields = fields.map((field, index) => (
    <TextField
      key={field.id}
      id={`options.${index}.id`}
      label={`Option ${index + 1}`}
      {...register(`options.${index}.value`)}
    >
      <div className="flex items-center justify-center gap-6 px-4">
        <RadioButton
          name="options"
          id={`options.${index}.id`}
          value={field.value}
          defaultChecked={field.isCorrect}
          onChange={() => handleOptionCheck(index)}
        />
        <Button
          type="button"
          icon="text-red-400 text-lg ri-delete-bin-line"
          custom="w-6 h-6 border-none"
          onClick={() => handleRemove(index)}
        />
      </div>
    </TextField>
  ));

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        id="title"
        label="Title"
        {...register("title", { required: true, maxLength: 100 })}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-left text-blue-1000 font-medium mx-2">Options</h2>
        <div className="grid grid-cols-1 gap-6 auto-rows-fr">
          {formFields}
          {fields.length < 4 && (
            <Button
              type="button"
              variant="add"
              custom="rounded-xl text-xl py-3"
              onClick={handleAdd}
            />
          )}
        </div>
      </div>
    </Form>
  );
};

export default QuestionForm;

const RadioButton = forwardRef(
  ({ id, name, value, defaultChecked, onChange, ...rest }, ref) => (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      onChange={onChange}
      ref={ref}
      {...rest}
      className="flex items-center justify-center appearance-none cursor-pointer 
      bg-gray-100 rounded-sm w-5 h-5 text-lg font-semibold ri-check-line 
      checked:text-white checked:bg-emerald-400"
    />
  )
);
