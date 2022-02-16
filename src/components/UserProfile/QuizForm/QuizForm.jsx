import React from "react";
import Form from "../../shared/Form";
import TextField from "../../shared/TextField/TextField";
import Checkbox from "./Checkbox";

export default function QuizForm() {
  return (
    <Form buttonText="Next">
      <TextField id="name" label="Quiz name" />
      <div className="flex flex-col gap-3 mx-2">
        <div className="text-left">
          <h2 className="text-left text-blue-1000 font-medium">Subjects</h2>
          <span className="text-sm text-gray-400">
            Choose relevant subjects for better content suggestion.
          </span>
        </div>
        <div role="list" className="flex flex-row flex-wrap text-sm gap-2">
          <Checkbox name="subject" label="English" />
          <Checkbox name="subject" label="World Languages" />
          <Checkbox name="subject" label="History" />
          <Checkbox name="subject" label="Fun" />
          <Checkbox name="subject" label="Social Studies" />
          <Checkbox name="subject" label="Mathematics" />
          <Checkbox name="subject" label="Computer Science" />
        </div>
      </div>
    </Form>
  );
}
