import clsx from "clsx";
import React from "react";

export default function Modal({ isOpen = false, setIsOpen, children }) {
  return (
    <div
      className={clsx("relative z-10", {
        ["hidden"]: !isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 z-10 transform">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative overflow-hidden text-left transition-all transform bg-base-9 rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex flex-col items-center justify-center px-6 py-12 gap-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
