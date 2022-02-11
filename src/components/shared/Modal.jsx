import { React } from "react";

export default function Modal({ children }) {
  return <div className="fixed h-screen w-screen">{children}</div>;
}
