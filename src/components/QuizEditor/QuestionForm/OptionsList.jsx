import React from "react";
import Button from "../../shared/Button";
import OptionField from "./OptionField";

export default function OptionsList({ data }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-left text-blue-1000 font-medium mx-2">Options</h2>
      <ul className="grid grid-cols-1 gap-6 auto-rows-fr">
        {data?.map((x, i) => (
          <li>
            <OptionField number={++i} value={x.value} correct={x.isCorrect} />
          </li>
        ))}
        {(data == null || data?.length < 4) && (
          <Button
            type="button"
            variant="add"
            custom="rounded-xl text-xl py-3"
          />
        )}
      </ul>
    </div>
  );
}
