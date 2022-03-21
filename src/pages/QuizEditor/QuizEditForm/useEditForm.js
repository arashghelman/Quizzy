import { useForm, useWatch } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSubjectsSelection } from "@hooks";
import { useDelete, useUpsert } from "react-supabase";
import { supabase } from "supabaseClient";
import { bucketBaseUrl } from "constants/supabaseConstants";

export function useEditForm(defaultValues, callback) {
  const { control, register, reset, getValues, setValue, handleSubmit } =
    useForm({
      defaultValues: {
        quizId: "",
        name: "",
        description: "",
        isPublic: false,
        minGradeId: {},
        maxGradeId: {},
        thumbnailUrl: "",
      },
    });

  const { subjects, selectSubject } = useSubjectsSelection(
    defaultValues.subjects
  );
  const isPublic = useWatch({ control, name: "isPublic" });
  const minGradeId = getValues("minGradeId");
  const maxGradeId = getValues("maxGradeId");
  const thumbnailUrl = useWatch({ control, name: "thumbnailUrl" });

  useEffect(
    () => defaultValues && reset(defaultValues),
    [defaultValues, reset]
  );

  const selectGrade = (propName) => (e) => {
    const gradeId = e.target.value;
    setValue(propName, gradeId);
  };

  const [isUploading, setIsUploading] = useState(false);

  const uploadThumbnail = async (e) => {
    setIsUploading(true);

    const file = e.target.files[0];

    const { data } = await supabase.storage
      .from("thumbnails")
      .upload(`${Date.now()}_${file.name}`, file);

    if (data) {
      const url = bucketBaseUrl + data.Key;
      setValue("thumbnailUrl", url);
    }

    setIsUploading(false);
  };

  const [
    { error: subjectsError, fetching: areSubjectsUpserting },
    upsertSubjects,
  ] = useUpsert("quiz_subjects");
  const [{ error: deleteError, fetching: isDeleting }, deleteSubjects] =
    useDelete("quiz_subjects");
  const [{ error: quizError, fetching: isQuizUpserting }, upsertQuiz] =
    useUpsert("quizzes");

  const submit = handleSubmit(async (data) => {
    await deleteSubjects((query) => query.eq("quiz_id", data.quizId));

    const subjectsToSubmit = subjects;
    await Promise.all(
      subjectsToSubmit.map(
        async (subjectId) =>
          await upsertSubjects({ subject_id: subjectId, quiz_id: data.quizId })
      )
    );

    const dataToSubmit = {
      name: data.name,
      description: data.description,
      thumbnail_url: data.thumbnailUrl,
      min_grade_id: data.minGradeId,
      max_grade_id: data.maxGradeId,
      is_public: data.isPublic,
    };

    await upsertQuiz({ ...dataToSubmit, quiz_id: data.quizId });
    callback();
  });

  return [
    register,
    {
      submit,
      isSubmitting: areSubjectsUpserting || isQuizUpserting || isDeleting,
    },
    { error: subjectsError || quizError || deleteError },
    { isPublic },
    { subjects, selectSubject },
    { minGradeId, maxGradeId, selectGrade },
    { thumbnailUrl, uploadThumbnail, isUploading },
  ];
}
