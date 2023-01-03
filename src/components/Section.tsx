import clsx from "clsx";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Section({
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={clsx("flex w-full", className)} {...rest}>
      {children}
    </section>
  );
}
