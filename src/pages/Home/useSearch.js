import { useState, useEffect, useCallback } from "react";
import { useForm, useWatch } from "react-hook-form";
import { supabase } from "supabaseClient";

export function useSearch() {
  const query = `quizId:quiz_id,name,
    thumbnailUrl:thumbnail_url,description,subjects(name),
    minGrade:min_grade_id(name),
    maxGrade:max_grade_id(name)`;

  const { control, register } = useForm({
    defaultValues: { search: "" },
  });

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const keyword = useWatch({ control, name: "search" });

  const execute = useCallback(async () => {
    setIsLoading(true);

    let result = null;

    if (keyword) {
      result = await supabase
        .from("quizzes")
        .select(query)
        .eq("is_public", true)
        .textSearch("name", keyword);
    } else {
      result = await supabase
        .from("quizzes")
        .select(query)
        .eq("is_public", true);
    }

    result.data && setData(result.data);
    result.error && setError(result.error);

    setIsLoading(false);
  }, [keyword, query]);

  useEffect(() => execute(), [execute]);

  return [register, { keyword, data, error, isLoading }, execute];
}
