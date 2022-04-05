import React from "react";
import Slide from "./Slide";

export default function Slider({ items, counter }) {
  return (
    <div className="flex relative w-full overflow-hidden h-full justify-center items-center">
      {items.map((item, index) => (
        <Slide
          key={index}
          state={
            index === counter ? "current" : index < counter ? "prev" : "next"
          }
        >
          {item}
        </Slide>
      ))}
    </div>
  );
}
