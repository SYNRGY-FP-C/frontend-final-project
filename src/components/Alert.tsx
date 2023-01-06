import React from "react";

type AlertProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Alert({ children }: AlertProps) {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded"
      role="alert"
    >
      {children}
    </div>
  );
}
