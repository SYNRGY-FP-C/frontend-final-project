import variants from "@/constants/variants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

export default function ProfileButton({
  variant = "light",
  menu = [],
  image = "/images/hero-image.jpg",
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        className={clsx(
          "inline-flex relative items-center py-1.5 font-medium text-center px-5 rounded-full border gap-x-3",
          variants[variant].text,
          variants[variant].bg,
          variants[variant].border
        )}
        onClick={() => setOpen(!open)}
      >
        Profile
        <Image
          src={image}
          width={40}
          height={40}
          className={clsx(
            "w-10 h-10 border-2 rounded-full bg-gray-500",
            variants[variant].border
          )}
          alt="Profile"
        />
      </button>
      {/* Dropdown menu */}
      <div
        className={clsx("pt-2 absolute z-10", {
          hidden: !open,
          block: open,
        })}
      >
        <div className="flex flex-col">
          {menu.map((item, index) => (
            <div key={uuid()}>
              <Link
                href={item.link}
                className={clsx(
                  "block px-9 md:px-9 py-2 text-center",
                  variants[variant].text,
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
    </>
  );
}
