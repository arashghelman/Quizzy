import { useEffect } from "react";
import { useUpsert } from "react-supabase";
import { useForm, useFieldArray } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export const useQuestionForm = (defaultValues, callback) => {
  const { control, register, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      title: "",
      options: [],
    },
  });

  const {
    fields: options,
    append,
    remove,
    update,
  } = useFieldArray({
    control,
    name: "options",
  });

  useEffect(
    () => defaultValues && reset(defaultValues),
    [defaultValues, reset]
  );

  const [{ error, fetching: isSubmitting }, execute] =
    useUpsert("quiz_questions");

  const addOption = () =>
    append({ optionId: uuidv4(), value: "", isCorrect: false });

  const removeOption = (index) => remove(index);

  const checkOption = (indexToCheck) =>
    getValues("options").forEach((value, index) =>
      update(index, {
        ...value,
        isCorrect: indexToCheck === index ? true : false,
      })
    );

  const submit = handleSubmit(async (data) => {
    const dataToSubmit = {
      quiz_id: data.quizId,
      title: data.title,
      options: data.options,
    };

    data.questionId
      ? await execute({ ...dataToSubmit, question_id: data.questionId })
      : await execute([dataToSubmit]);

    callback();
  });

  return [
    register,
    { submit, isSubmitting },
    { error },
    { options, addOption, removeOption, checkOption },
  ];
};
