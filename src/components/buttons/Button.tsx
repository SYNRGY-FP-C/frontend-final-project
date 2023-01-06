import React from "react";

type ButtonProps = {
  isLoading: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  isLoading = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
