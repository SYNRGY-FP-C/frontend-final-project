import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="bg-gray-100 text-primary-1 sm:text-sm border border-base-200 focus:border-base-200 focus:ring-0 rounded-lg w-full block py-2.5 px-3"
    />
  );
}
