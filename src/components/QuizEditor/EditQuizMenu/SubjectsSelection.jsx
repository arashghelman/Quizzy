import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";

export default function SubjectsSelection() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("subjects")
        .select("subjectId:subject_id,name");

      const updatedData = data.map((x) => ({ ...x, isSelected: false }));
      setSubjects(updatedData);
    }

    fetchData();
  }, []);

  const handleClickSubject = (id) => {
    const updatedSubjects = [...subjects];
    const selectedSubject = updatedSubjects.find((x) => x.subjectId === id);
    selectedSubject.isSelected = !selectedSubject.isSelected;
    setSubjects(updatedSubjects);
  };

  return (
    <div className="mt-4 flex flex-col gap-y-7">
      <p className="mx-8 text-left text-gray-500 leading-7">
        Choose relevant subjects for better content suggestion.
      </p>
      <ul>
        {subjects.map((x) => (
          <Subject
            key={x.subjectId}
            name={x.name}
            selected={x.isSelected}
            onClick={() => handleClickSubject(x.subjectId)}
          />
        ))}
      </ul>
    </div>
  );
}

function Subject({ name, selected, onClick }) {
  return (
    <li
      className="pl-8 hover:bg-gray-100 active:bg-gray-200 cursor-pointer first:border-t-1"
      onClick={onClick}
    >
      <div className="py-6 flex justify-between text-left text-blue-1000">
        <span>{name}</span>
        {selected && (
          <span className="mr-9 font-bold text-green-500">&#10003;</span>
        )}
      </div>
      <hr />
    </li>
  );
}
