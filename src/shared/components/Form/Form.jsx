import React from "react";
import { loaderIcon } from "@constants/uiConstants";
import { formError } from "@constants/errors";
import Button from "@components/Button";

export default function Form({ children, isSubmitting, error, onSubmit }) {
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      {children}
      <div className="flex justify-between items-center gap-3 mb-2">
        <span className="text-red-400">{error && formError}</span>
        <Button type="submit" variant="greenish">
          {isSubmitting ? <span className={loaderIcon}></span> : "Save"}
        </Button>
      </div>
    </form>
  );
}
