import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="bg-gray-100 text-blind sm:text-sm border-0 rounded-lg w-full block p-2.5"
    />
  );
}
