import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="bg-base-7 focus:bg-base-8 text-primary-1 sm:text-sm border border-base-7 focus:border-primary-3 focus:ring-primary-3 rounded-lg w-full block py-2.5 px-3"
    />
  );
}
