import variants from "@/constants/variants";
import clsx from "clsx";
import React from "react";
import { MdSearch } from "react-icons/md";

type SearchBarProps = {
  variant?: "light" | "dark";
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({
  variant = "light",
  ...rest
}: SearchBarProps) {
  return (
    <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto">
      <input
        type="text"
        {...rest}
        className={clsx(
          "w-full px-6 py-3 rounded-xl bg-gray-100 border-0 focus:border-0",
          variants[variant].text,
          variants[variant].bg,
          variants[variant].border,
          variants[variant].focus
        )}
      />
      <button
        type="submit"
        className={clsx(
          "absolute px-1.5 py-1.5 rounded-lg right-2.5 bg-blind",
          variants["dark"].text,
          variants[variant].border
        )}
      >
        <MdSearch className="w-5 h-5" />
      </button>
    </div>
  );
}
