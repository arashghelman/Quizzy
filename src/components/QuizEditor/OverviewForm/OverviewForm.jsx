import React, { useState, useRef } from "react";

import FancyButton from "../../common/FancyButton/FancyButton";

import "./OverviewForm.css";

function OverviewForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    subjects: [],
    level: "",
  });

  const [subjects, setSubjects] = useState([
    { id: "1", name: "Architecture" },
    { id: "2", name: "Arts" },
    { id: "3", name: "Biology" },
    { id: "4", name: "Business" },
    { id: "5", name: "English" },
    { id: "6", name: "Chemistry" },
    { id: "7", name: "History" },
    { id: "8", name: "Fun" },
    { id: "9", name: "Physics" },
    { id: "10", name: "Geography" },
    { id: "11", name: "Information Technology" },
    { id: "12", name: "Computers" },
  ]);

  const levels = [
    { name: "Basic", icon: "😊" },
    { name: "Intermediate", icon: "😎" },
    { name: "Advanced", icon: "🤩" },
  ];

  const handleEnterName = (event) => {
    const updatedFormInput = { ...formInput };
    updatedFormInput.name = event.target.value;
    setFormInput(updatedFormInput);
  };

  const subjectsRef = useRef([]);

  const handleSelectSubject = (subjectId) => {
    const updatedFormInput = {
      ...formInput,
      subjects: [...formInput.subjects],
    };

    var selectedSubjectId = formInput.subjects.find((x) => x === subjectId);
    if (selectedSubjectId !== undefined) {
      updatedFormInput.subjects = formInput.subjects.filter(
        (x) => x !== selectedSubjectId
      );
      setFormInput(updatedFormInput);
      return;
    }

    if (formInput.subjects.length >= 3) {
      const firstSelectedId = updatedFormInput.subjects.shift();
      const firstSelectedInputRef = subjectsRef.current.find(
        (x) => x.id === firstSelectedId
      );
      firstSelectedInputRef.checked = false;
    }

    updatedFormInput.subjects.push(subjectId);
    setFormInput(updatedFormInput);
  };

  const handleSelectLevel = (levelName) => {
    const updatedFormInput = { ...formInput };
    updatedFormInput.level = levelName;
    setFormInput(updatedFormInput);
  };

  return (
    <div className="fixed w-120 py-6 px-7 rounded-lg bg-white">
      <div className="flex justify-between items-center">
        <h2
          className="m-0 text-left text-2xl text-pink-hot 
                            font-quicksand font-bold"
        >
          Create a quiz
        </h2>
        <button
          className="border-none rounded-full w-8 h-8 
                                text-lg bg-none text-gray-dark 
                                cursor-pointer hover:bg-gray"
        >
          &#x2715;
        </button>
      </div>
      <div className="mt-5 mb-2">
        <form>
          <div className="form-element">
            <label className="form-label">Name this quiz</label>
            <input
              className="py-3 px-4 border-none rounded-lg bg-gray 
                                        text-base text-pink-hot font-quicksand 
                                        placeholder-gray-dark"
              type="text"
              id="name"
              placeholder="Enter a name"
              onChange={(event) => handleEnterName(event)}
            />
          </div>
          <div className="form-element">
            <label className="form-label">Choose relevant subjects</label>
            <div className="flex flex-row flex-wrap text-sm font-quicksand">
              {subjects.map((x, i) => (
                <div key={x.id}>
                  <input
                    className="hidden selected-subject"
                    type="checkbox"
                    id={x.id}
                    name="subject"
                    ref={(r) => (subjectsRef.current[i] = r)}
                    onChange={() => handleSelectSubject(x.id)}
                  />
                  <label
                    className="flex m-1 py-1 px-3 rounded-3xl bg-gray 
                                                    text-gray-dark font-semibold cursor-pointer 
                                                    transition-all duration-200 ease-out
                                                    hover:text-gray-semi-dark"
                    htmlFor={x.id}
                  >
                    {x.name}
                  </label>
                </div>
              ))}
              <span
                className="flex items-center ml-4 text-pink-hot font-bold 
                                            cursor-pointer hover:opacity-80"
              >
                more...
              </span>
            </div>
          </div>
          <div className="form-element">
            <label className="form-label">Pick a level</label>
            <div className="flex justify-between py-1 px-4 font-quicksand font-semibold">
              {levels.map((x) => (
                <div
                  className="flex flex-col items-center hover:opacity-80"
                  key={x.name}
                >
                  <input
                    className="hidden selected-level"
                    type="radio"
                    id={x.name}
                    name="level"
                    onChange={() => handleSelectLevel(x.name)}
                  />
                  <label
                    className="flex justify-center items-center rounded-full 
                                                    w-14 h-14 bg-gray text-2xl cursor-pointer
                                                    transition-all duration-200 ease-out"
                    htmlFor={x.name}
                  >
                    {x.icon}
                  </label>
                  <label
                    className="mt-2 text-sm text-gray-dark cursor-pointer"
                    htmlFor={x.name}
                  >
                    {x.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <FancyButton custom="mr-2" type="cancel">
              Cancel
            </FancyButton>
            <FancyButton type="submit">Next</FancyButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OverviewForm;
