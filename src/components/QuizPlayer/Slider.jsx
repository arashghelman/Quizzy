import React from "react";

const Slider = ({ items, counter }) => (
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

export default Slider;

const Slide = ({ children, state }) => {
  const states = {
    current: "translate-x-0",
    next: "translate-x-full",
    prev: "-translate-x-full",
  };

  return (
    <div
      className={`absolute left-1/3 w-full transition duration-300 ${states[state]}`}
    >
      {children}
    </div>
  );
};
