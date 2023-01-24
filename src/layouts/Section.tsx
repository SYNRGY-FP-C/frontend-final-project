import clsx from "clsx";
import React from "react";

export default function Section({ children, odd = false }) {
  return (
    <section
      className={clsx(
        "flex w-full px-4 py-2 mx-auto",
        odd && "bg-primary-1",
        !odd && "bg-base-9"
      )}
    >
      <div className="w-full h-full max-w-screen-xl mx-auto">{children}</div>
    </section>
  );
}
