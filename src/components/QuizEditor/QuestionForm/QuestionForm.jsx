import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm, useFieldArray } from "react-hook-form";
import TextField from "../../shared/TextField/TextField";
import RadioButton from "./RadioButton";
import Button from "../../shared/Button";

export default function QuestionForm({ data }) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      options: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  useEffect(() => data && reset(data), [data, reset]);

  const handleRemoveClick = (index) => remove(index);

  const handleAddClick = () =>
    append({ optionId: uuidv4(), value: "", isCorrect: false }, true);

  const onSubmit = (data) => console.log(data);

  const formFields = fields.map((field, index) => (
    <TextField
      key={field.id}
      id={`options.${index}.id`}
      label={`Option ${index + 1}`}
      value={field.value}
      {...register(`options.${index}.value`, {
        required: true,
        maxLength: 100,
      })}
    >
      <div className="flex items-center justify-center gap-x-5 px-4">
        <RadioButton
          id={`options.${index}.id`}
          value={field.value}
          {...register("options", { required: true })}
        />
        <Button
          type="button"
          icon="ri-delete-bin-line"
          custom="w-6 h-6 border-none text-xl text-red-400"
          onClick={() => handleRemoveClick(index)}
        />
      </div>
    </TextField>
  ));

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="title"
        label="Title"
        {...register("title", { required: true, maxLength: 100 })}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-left text-blue-1000 font-medium mx-2">Options</h2>
        <fieldset className="grid grid-cols-1 gap-6 auto-rows-fr">
          {formFields}
          {fields.length < 4 && (
            <Button
              type="button"
              variant="add"
              custom="rounded-xl text-xl py-3"
              onClick={handleAddClick}
            />
          )}
        </fieldset>
      </div>
      <div className="mb-2 self-end">
        <Button
          type="submit"
          variant="greenish"
          custom="p-10"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </div>
    </form>
  );
}
