import { React } from "react";
import Backdrop from "./Backdrop";

export default function Sidebar({ children }) {
  return (
    <Backdrop>
      <section className="fixed top-0 right-0 w-1/4 h-full z-50 flex flex-col bg-white overflow-x-hidden shadow-md">
        {children}
      </section>
    </Backdrop>
  );
}
