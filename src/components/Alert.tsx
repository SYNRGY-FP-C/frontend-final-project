import clsx from "clsx";
import React from "react";

type AlertProps = {
  type?: "error" | "success";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Alert({ type = "error", children }: AlertProps) {
  const alertTypes = {
    error: "bg-red-100 border-red-400 text-red-700",
    success: "bg-green-100 border-green-400 text-green-700",
  };
  return (
    <div
      className={clsx("px-4 py-3 rounded relative", alertTypes[type])}
      role="alert"
    >
      {children}
    </div>
  );
}
