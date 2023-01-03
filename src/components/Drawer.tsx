import clsxm from "clsx";
import React from "react";
import { HiX } from "react-icons/hi";

import Logo from "./Logo";

export default function Drawer({ children, isOpen = false, setIsOpen }) {
  return (
    <>
      <div
        className={clsxm(
          "fixed z-10 h-screen w-screen bg-gray-800 opacity-50 md:hidden",
          {
            ["hidden"]: !isOpen,
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div
        className={clsxm(
          "fixed z-20 h-screen w-72 overflow-y-auto border-r border-gray-400 bg-white duration-300 md:hidden",
          {
            // ["translate-x-0 transition-all"]: isOpen,
            // ["-translate-x-full transition-all"]: !isOpen,
            ["translate-x-0 transition-all"]: isOpen,
            ["-translate-x-full transition-all"]: !isOpen,
          }
        )}
      >
        <div className="container px-4 py-4">
          <div className="flex justify-between mb-3">
            <Logo />
            <button
              className="flex items-center justify-center transition-all bg-gray-200 rounded-md h-9 w-9 ring-gray-300 hover:ring-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HiX />
            </button>
          </div>
          <div className="flex flex-col space-y-3">{children}</div>
        </div>
      </div>
    </>
  );
}
