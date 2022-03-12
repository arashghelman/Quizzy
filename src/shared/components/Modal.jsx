import { React } from "react";
import { closeIcon } from "@constants/uiConstants";
import Card from "@components/Card";
import Button from "./Button";
import Backdrop from "./Backdrop";

export default function Modal({ children, heading, onClose }) {
  return (
    <Backdrop>
      <Card
        layout="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-2/5 flex flex-col gap-6 p-3 z-50"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-blue-1000 font-medium mx-3">{heading}</h1>
          <Button
            icon={closeIcon}
            variant="custom"
            customStyle="rounded-full w-10 h-10 text-2xl text-gray-500 hover:bg-gray-100 active:bg-gray-200"
            onClick={onClose}
          />
        </div>
        <div className="mx-3 flex flex-col gap-8">{children}</div>
      </Card>
    </Backdrop>
  );
}
