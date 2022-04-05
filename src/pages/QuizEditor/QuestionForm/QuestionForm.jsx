import React from "react";
import { removeIcon, addIcon } from "@constants/uiConstants";
import { useQuestionForm } from "./useQuestionForm";
import Form from "@components/Form";
import TextField from "@components/TextField/TextField";
import Button from "@components/Button";
import OptionRadioButton from "./OptionRadioButton";

export default function QuestionForm({ defaultValues, onReload }) {
  const [
    register,
    { submit, isSubmitting },
    { error },
    { options, addOption, removeOption, checkOption },
  ] = useQuestionForm(defaultValues, async () => await onReload());

  const formFields = options.map((field, index) => (
    <TextField
      key={field.id}
      id={`options.${index}.id`}
      label={`Option ${index + 1}`}
      {...register(`options.${index}.value`, {
        required: true,
        maxLength: 100,
      })}
    >
      <div className="flex items-center justify-center gap-6 px-4">
        <OptionRadioButton
          name="options"
          id={`options.${index}.id`}
          value={field.value}
          defaultChecked={field.isCorrect}
          onChange={() => checkOption(index)}
        />
        <Button
          icon={removeIcon}
          variant="custom"
          customStyle="border-none text-lg text-red-400"
          onClick={() => removeOption(index)}
        />
      </div>
    </TextField>
  ));

  return (
    <Form isSubmitting={isSubmitting} error={error} onSubmit={submit}>
      <TextField
        id="title"
        label="Title"
        {...register("title", { required: true, maxLength: 200 })}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-left text-blue-1000 font-medium mx-2">Options</h2>
        <div className="grid grid-cols-1 gap-6 auto-rows-fr">
          {formFields}
          {options.length < 4 && (
            <Button
              icon={addIcon}
              variant="custom"
              customStyle="rounded-xl border-1 border-dashed 
                border-gray-300 hover:border-blue-400 text-xl 
                text-gray-300 hover:text-blue-400 py-3"
              onClick={addOption}
            />
          )}
        </div>
      </div>
    </Form>
  );
}
