import variants from "@/constants/variants";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function Featured({
  title = "Judul",
  description = "Deskripsi",
  children,
  href = "/search",
  center = false,
  three = false,
}) {
  return (
    <>
      <div
        className={clsx(
          "flex items-center justify-between mt-8",
          variants["outline"].text
        )}
      >
        <div
          className={clsx(
            "flex flex-row items-center gap-x-4",
            center ? "justify-center w-full" : "justify-start w-auto"
          )}
        >
          <h2 className="text-2xl md:text-[32px] text-base-1 font-bold">
            {title}
          </h2>
          {center ? null : <p className="hidden md:block">{description}</p>}
        </div>
        {center ? null : (
          <div className="w-auto">
            <Link href={href} className="text-gray-600 hover:underline">
              Lihat Semua
            </Link>
          </div>
        )}
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-4 my-8",
          center ? "justify-center" : "justify-start",
          three ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {children}
      </div>
    </>
  );
}
