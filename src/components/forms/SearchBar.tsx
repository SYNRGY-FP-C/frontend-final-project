import variants from "@/constants/variants";
import clsx from "clsx";
import React from "react";
import { MdSearch } from "react-icons/md";

type SearchBarProps = {
  variant?: "primary" | "outline";
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({
  variant = "primary",
  ...rest
}: SearchBarProps) {
  return (
    <div className="flex flex-col w-full gap-y-3">
      <div className="relative flex items-center justify-center w-full mx-auto">
        <input
          type="text"
          {...rest}
          className={clsx(
            "w-full peer px-6 py-3 rounded-xl bg-gray-100 border-0 focus:border-0 focus:ring-0",
            variants["outline"].bg,
            variants[variant].border
          )}
        />
        <button type="submit" className="absolute px-1.5 py-1.5 right-2.5">
          <MdSearch className="w-5 h-5 text-[#BFBFBF]" />
        </button>
      </div>
      <div className="hidden peer-focus:flex">oke</div>
    </div>
  );
}
