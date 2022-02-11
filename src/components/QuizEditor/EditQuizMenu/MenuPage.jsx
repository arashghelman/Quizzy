import React from "react";

export default function MenuPage({ children, title, button, rightSide }) {
  return (
    <section className={`absolute ${rightSide && "left-full"} w-full`}>
      <div className="flex items-center gap-x-6 px-6 py-4">
        {button}
        <h1 className="text-xl text-blue-1000 font-medium">{title}</h1>
      </div>
      {children}
    </section>
  );
}
