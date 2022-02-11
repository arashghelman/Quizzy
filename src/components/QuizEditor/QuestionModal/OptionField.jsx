import React from "react";
import Button from "../../shared/Button";
import TextField from "../shared/TextField/TextField";

export default function OptionField({ number, correct, ...props }) {
  return (
    <TextField id="option" label={`Option ${number}`} {...props}>
      <div className="flex items-center justify-center gap-x-5 px-4">
        <input
          type="checkbox"
          checked={correct}
          className="accent-emerald-400 w-4 h-4 mx-1 cursor-pointer"
        />
        <Button
          icon="ri-delete-bin-line"
          custom="w-6 h-6 border-none text-xl text-red-400"
        />
      </div>
    </TextField>
  );
}
