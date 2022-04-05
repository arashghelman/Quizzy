import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export function useSubjectsSelection(defaultValue) {
  const { control, setValue, reset } = useForm({
    defaultValues: { subjects: [] },
  });

  const subjects = useWatch({ control, name: "subjects" });

  useEffect(
    () => defaultValue && reset({ subjects: defaultValue }),
    [defaultValue, reset]
  );

  function selectSubject(id) {
    const prevSelectedSubject = subjects.find((subjectId) => id === subjectId);

    if (prevSelectedSubject !== undefined) {
      const index = subjects.indexOf(prevSelectedSubject);
      subjects.splice(index, 1);
      setValue("subjects", subjects);

      return;
    }

    if (subjects.length >= 3) {
      subjects.shift();
      setValue("subjects", subjects);
    }

    subjects.push(id);
    setValue("subjects", subjects);
  }

  return { subjects, selectSubject };
}
