import React from "react";

export default function SubjectsSelection({ subjects, onSelect }) {
  return (
    <div className="flex flex-row flex-wrap text-sm gap-2">
      {subjects.map((subject, index) => (
        <Subject
          key={subject.id}
          name={`subject.${index}`}
          value={subject.name}
          label={subject.name}
          defaultChecked={subject.isSelected}
          onChange={() => onSelect(subject.id)}
        />
      ))}
    </div>
  );
}

function Subject({ id, name, label, defaultChecked, onChange }) {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={name}
        defaultChecked={defaultChecked}
        className="invisible absolute"
        onChange={onChange}
      />
      <div
        className={`flex py-1 px-3 rounded-full
            cursor-pointer transition duration-100
            ${
              defaultChecked
                ? "bg-blue-400 text-white hover:bg-blue-300"
                : "bg-slate-200 text-slate-500 hover:bg-slate-300"
            }`}
      >
        {label}
      </div>
    </label>
  );
}
