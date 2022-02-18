import React from "react";
import Button from "./Button";

export default function Form({ children, buttonText = "Save", onSubmit }) {
  return (
    <form className="flex flex-col gap-6">
      {children}
      <div className="grid grid-flow-col auto-cols-fr justify-end gap-x-3 mb-2">
        <div className="col-span-3"></div>
        <Button type="submit" variant="greenish" onClick={onSubmit}>
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
