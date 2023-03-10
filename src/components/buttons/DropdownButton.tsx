import variants from "@/constants/variants";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { v4 as uuid } from "uuid";

export default function DropdownButton({
  variant = "primary",
  menu = [],
  children,
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        className={clsx(
          "inline-flex relative items-center py-2 font-medium text-center px-4 rounded-lg border-2",
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
        <div className="flex flex-col w-full rounded-lg shadow">
          {menu.map((item, index) => (
            <div key={uuid()}>
              <Link
                href={item.link}
                className={clsx(
                  "block px-3 py-2 text-center",
                  variants["outline"].text,
                  variants["outline"].bg,
                  variants[variant].border,
                  {
                    "rounded-t-lg": index === 0,
                    "rounded-b-lg": index === menu.length - 1,
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
