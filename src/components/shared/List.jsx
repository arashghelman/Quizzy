import React from "react";

export default function List({ children, heading, subHeading, gap }) {
  return (
    <div className="grid gap-10">
      {heading && (
        <div className="flex flex-col gap-y-3 text-left text-blue-1000">
          <h1 className="text-xl font-medium">{heading}</h1>
          {subHeading && <h2>{subHeading}</h2>}
        </div>
      )}
      <ul className={`grid grid-cols-2 ${gap} auto-rows-fr`}>{children}</ul>
    </div>
  );
}
