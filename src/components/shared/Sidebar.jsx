import { React } from "react";
import Backdrop from "./Backdrop";

export default function Sidebar({ children, closed }) {
  return (
    <>
      {!closed && <Backdrop />}
      <section
        className={`fixed top-0 right-0 w-1/4 h-full z-30 transform ${
          closed && "translate-x-[150%]"
        }
            flex flex-col bg-white overflow-x-hidden shadow-md duration-300`}
      >
        {children}
      </section>
    </>
  );
}
