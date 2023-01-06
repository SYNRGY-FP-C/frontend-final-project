import React from "react";
import { HiX } from "react-icons/hi";

export default function CloseButton({ setIsOpen }) {
  return (
    <button
      className="flex items-center justify-center transition-all bg-gray-200 rounded-md h-9 w-9 ring-gray-300 hover:ring-2"
      onClick={setIsOpen}
    >
      <HiX />
    </button>
  );
}
