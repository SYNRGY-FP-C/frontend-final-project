import clsx from "clsx";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={clsx("container w-full px-4 py-6 mx-auto", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
