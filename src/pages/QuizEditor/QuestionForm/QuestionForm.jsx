import React, { useEffect } from "react";
import { useUpsert } from "react-supabase";
import { v4 as uuidv4 } from "uuid";
import { useForm, useFieldArray } from "react-hook-form";
import Form from "@components/Form";
import TextField from "@components/TextField/TextField";
import Button from "@components/Button";
import OptionRadioButton from "./OptionRadioButton";

export default function QuestionForm({ defaultValues, onReload }) {
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

  const [{ data, error, fetching }, execute] = useUpsert("quiz_questions");

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
      ? await execute({ ...dataToSubmit, question_id: data.questionId })
      : await execute([dataToSubmit]);

    await onReload();
  };

  const formFields = fields.map((field, index) => (
    <TextField
      key={field.id}
      id={`options.${index}.id`}
      label={`Option ${index + 1}`}
      {...register(`options.${index}.value`)}
    >
      <div className="flex items-center justify-center gap-6 px-4">
        <OptionRadioButton
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
}
