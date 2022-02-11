import React from "react";
import MenuItem from "./MenuItem";

export default function SecondaryMenuItem({ children, id, onClick }) {
  return (
    <MenuItem onClick={() => onClick(id)}>
      <div className="flex flex-col gap-y-2 text-left">{children}</div>
      <i className="text-xl text-gray-400 ri-arrow-right-s-line"></i>
    </MenuItem>
  );
}
