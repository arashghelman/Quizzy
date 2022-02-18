import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../../shared/Form";
import TextField from "../../shared/TextField/TextField";
import RadioInput from "./RadioInput";
import Button from "../../shared/Button";

export default function QuestionForm({ data }) {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setOptions(data.options);
    } else {
      setTitle("");
      setOptions([]);
    }
  }, [data]);

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleOptionCheck = (id) => {
    const updatedOptions = options.map((x) => ({ ...x }));
    updatedOptions.forEach((x) => (x.isCorrect = false));
    const checkedOption = updatedOptions.find((x) => x.optionId === id);
    checkedOption.isCorrect = true;
    setOptions(updatedOptions);
  };

  const handleOptionValueChange = (event, id) => {
    const updatedOptions = options.map((x) => ({ ...x }));
    const changedOption = updatedOptions.find((x) => x.optionId === id);
    changedOption.value = event.target.value;
    setOptions(updatedOptions);
  };

  const handleAddClick = () => {
    const updatedOptions = options.map((x) => ({ ...x }));
    updatedOptions.push({ value: "", isCorrect: false, optionId: uuidv4() });
    setOptions(updatedOptions);
  };

  const handleRemoveClick = (id) => {
    const clonedOptions = options.map((x) => ({ ...x }));
    const updatedOptions = clonedOptions.filter((x) => x.optionId !== id);
    setOptions(updatedOptions.filter((x) => x.optionId !== id));
  };

  const handleSaveClick = (event) => {
    console.log({ title, options });
  };

  return (
    <Form onSubmit={(event) => handleSaveClick(event)}>
      <TextField
        id="title"
        label="Title"
        value={title}
        required
        onChange={(event) => handleTitleChange(event)}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-left text-blue-1000 font-medium mx-2">Options</h2>
        <div role="list" className="grid grid-cols-1 gap-6 auto-rows-fr">
          {options.map((x, i) => (
            <TextField
              key={x.optionId}
              id="option"
              label={`Option ${++i}`}
              value={x.value}
              required
              onChange={(event) => handleOptionValueChange(event, x.optionId)}
            >
              <div className="flex items-center justify-center gap-x-5 px-4">
                <RadioInput
                  name="option"
                  checked={x.isCorrect}
                  required
                  onChange={() => handleOptionCheck(x.optionId)}
                />
                <Button
                  type="button"
                  icon="ri-delete-bin-line"
                  custom="w-6 h-6 border-none text-xl text-red-400"
                  onClick={() => handleRemoveClick(x.optionId)}
                />
              </div>
            </TextField>
          ))}
          {options.length < 4 && (
            <Button
              type="button"
              variant="add"
              custom="rounded-xl text-xl py-3"
              onClick={handleAddClick}
            />
          )}
        </div>
      </div>
    </Form>
  );
}
