import React from "react";
import Button from "./Button";

export default function Form({ children, buttonText = "Save" }) {
  return (
    <form className="flex flex-col gap-6">
      {children}
      <div className="grid grid-flow-col auto-cols-fr justify-end gap-x-3 mb-2">
        <div className="col-span-2"></div>
        <Button type="button" custom="py-2 rounded-lg">
          Cancel
        </Button>
        <Button type="submit" variant="greenish">
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
