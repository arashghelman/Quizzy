import React from "react";
import SelectMenu from "../../shared/SelectMenu";

export default function GradesSelection() {
  const grades = [
    "KG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "University",
  ];
  return (
    <div className="mt-4 flex flex-col gap-y-6">
      <p className="mx-8 text-left text-gray-500 leading-7">
        Select an appropriate range for your quiz's grades.
      </p>
      <div className="mx-7 grid grid-cols-2 gap-x-3">
        <SelectMenu title="From" data={grades} />
        <SelectMenu title="To" data={grades} />
      </div>
    </div>
  );
}
