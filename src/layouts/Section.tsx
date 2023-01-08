import clsx from "clsx";
import React from "react";

export default function Section({ children, odd = false }) {
  return (
    <section
      className={clsx(
        "flex w-full px-4 py-2 mx-auto md:min-w-[360px] lg:min-w-[720px]",
        odd && "bg-gray-100",
        !odd && "bg-white"
      )}
    >
      <div className="w-full h-full max-w-screen-xl mx-auto">{children}</div>
    </section>
  );
}
