import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import SelectMenu from "../../shared/SelectMenu";

export default function GradesSelection() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("grades")
        .select("gradeId:grade_id,name");

      setGrades(data);
    }

    fetchData();
  }, []);

  return (
    <div className="mt-4 flex flex-col gap-y-6">
      <p className="mx-8 text-left text-gray-500 leading-7">
        Select an appropriate range for your quiz's grades.
      </p>
      <div className="mx-7 grid grid-cols-2 gap-x-3">
        <SelectMenu label="From" name="minGrade" data={grades} />
        <SelectMenu label="To" name="maxGrade" data={grades} />
      </div>
    </div>
  );
}
