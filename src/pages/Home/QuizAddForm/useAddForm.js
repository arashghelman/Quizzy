import { useForm } from "react-hook-form";
import { useInsert } from "react-supabase";
import { useSubjectsSelection } from "@hooks";

export function useAddForm(callback) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      subjects: [],
    },
  });

  const { subjects, selectSubject } = useSubjectsSelection(null);

  const [{ error: quizError, fetching: isQuizSubmitting }, insertQuiz] =
    useInsert("quizzes");
  const [
    { error: subjectsError, fetching: areSubjectsSubmitting },
    insertSubjects,
  ] = useInsert("quiz_subjects");

  const submit = handleSubmit(async (values) => {
    const { data } = await insertQuiz({ name: values.name });
    if (!data) return;

    await Promise.all(
      subjects.map(
        async (subjectId) =>
          await insertSubjects({
            quiz_id: data[0].quiz_id,
            subject_id: subjectId,
          })
      )
    );
  });

  return [
    register,
    {
      submit,
      isSubmitting: isQuizSubmitting || areSubjectsSubmitting,
    },
    { error: quizError || subjectsError },
    { subjects, selectSubject },
  ];
}
