import React from "react";
import Form from "../../shared/Form";
import TextField from "../../shared/TextField/TextField";
import OptionsList from "./OptionsList";

export default function QuestionForm({ data }) {
  return (
    <Form>
      <TextField id="title" label="Title" value={data?.questionTitle} />
      <OptionsList data={data?.options} />
    </Form>
  );
}
