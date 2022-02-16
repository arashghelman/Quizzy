import { React } from "react";
import Button from "./Button";
import Backdrop from "./Backdrop";

export default function Modal({ children, title, closed, onClickClose }) {
  return (
    <>
      {!closed && <Backdrop />}
      <section
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-2/5 rounded-md flex flex-col gap-6 p-3 bg-white z-30 transition duration-300 
        ${closed && "translate-y-[150%]"}`}
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
        <div className="mx-3 flex flex-col gap-8">{children}</div>
      </section>
    </>
  );
}
