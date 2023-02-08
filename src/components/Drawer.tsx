import clsxm from "clsx";
import React from "react";

import CloseButton from "./buttons/CloseButton";
import Logo from "./Logo";

type DrawerProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Drawer({
  children,
  isOpen = false,
  setIsOpen,
}: DrawerProps) {
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
          "fixed z-20 h-screen w-72 overflow-y-auto border-r border-gray-400 bg-base-9 duration-300 md:hidden",
          {
            // ["translate-x-0 transition-all"]: isOpen,
            // ["-translate-x-full transition-all"]: !isOpen,
            ["translate-x-0 transition-all"]: isOpen,
            ["-translate-x-full transition-all"]: !isOpen,
          }
        )}
      >
        <div className="container h-full px-4 my-4">
          <div className="flex justify-between mb-6">
            <Logo className="w-8 h-8 mr-3" />
            <CloseButton setIsOpen={() => setIsOpen(!isOpen)} />
          </div>
          <div className="flex flex-col justify-between gap-y-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
