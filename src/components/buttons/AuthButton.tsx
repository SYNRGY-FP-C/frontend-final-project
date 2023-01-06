import variants from "@/constants/variants";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { v4 as uuid } from "uuid";

export default function AuthButton({ variant = "light", menu = [], children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        className={clsx(
          "inline-flex relative items-center py-3 font-medium text-center px-7 rounded-lg border",
          variants[variant].text,
          variants[variant].bg,
          variants[variant].border
        )}
        onClick={() => setOpen(!open)}
      >
        {children} <MdArrowDropDown className="w-5 h-5" />
      </button>
      {/* Dropdown menu */}
      <div
        className={clsx("pt-2 absolute z-10 w-full", {
          hidden: !open,
          block: open,
        })}
      >
        <div className="flex flex-col w-full">
          {menu.map((item, index) => (
            <div key={uuid()}>
              <Link
                href={item.link}
                className={clsx(
                  "block px-6 py-2 text-center",
                  variants["gray"].text,
                  variants["gray"].bg,
                  variants[variant].border,
                  {
                    "rounded-t-lg border": index === 0,
                    "border-b border-x": index > 0 && index < menu.length - 1,
                    "rounded-b-lg border-x border-b": index === menu.length - 1,
                  }
                )}
              >
                {item.name}{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
