import React from "react";

export default function QuizzesList({ children }) {
  return <ul className="grid grid-cols-4 gap-8">{children}</ul>;
}
