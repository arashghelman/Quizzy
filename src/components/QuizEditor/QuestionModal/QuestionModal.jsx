import React from "react";
import Backdrop from "../../shared/Backdrop";
import TextField from "../shared/TextField/TextField";
import OptionsList from "./OptionsList";
import Button from "../../shared/Button";

export default function QuestionModal({ title, data, closed, onClickClose }) {
  return (
    <>
      {!closed && <Backdrop />}
      <form
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-2/5 rounded-md flex flex-col p-3 bg-white gap-5 ${
            closed && "translate-y-[150%]"
          } transition duration-300`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-blue-1000 font-medium mx-3">{title}</h1>
          <Button
            type="button"
            icon="ri-close-line"
            variant="secondary"
            onClick={onClickClose}
          />
        </div>
        <div className="mx-3 flex flex-col gap-8">
          <TextField id="title" label="Title" value={data?.questionTitle} />
          <OptionsList data={data?.options} />
          <div className="grid grid-flow-col auto-cols-fr justify-end gap-x-3 mb-2">
            <div className="col-span-2"></div>
            <Button type="button" custom="py-2 rounded-lg">
              Cancel
            </Button>
            <Button
              type="submit"
              custom="py-2 rounded-lg bg-emerald-400 text-white border-none"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
