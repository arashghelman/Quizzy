import React, { useState } from "react";
import { closeIcon } from "@constants/uiConstants";
import Button from "@components/Button";

export default function Message({ text }) {
  const [isActive, setIsActive] = useState(true);

  const handleClose = () => setIsActive(false);

  return (
    <>
      {isActive ? (
        <div
          className="flex flex-col z-50 gap-3 fixed right-[50px] top-[30px] 
        bg-white w-[280px] rounded-md text-left px-5 py-3 shadow-md border-l-8 border-red-400"
        >
          <div className="flex justify-between">
            <span className="text-lg text-red-400 font-medium">Error</span>
            <Button
              icon={closeIcon}
              variant="custom"
              customStyle="text-slate-400"
              onClick={handleClose}
            />
          </div>
          <span className="text-sm text-slate-500">{text}</span>
        </div>
      ) : null}
    </>
  );
}
