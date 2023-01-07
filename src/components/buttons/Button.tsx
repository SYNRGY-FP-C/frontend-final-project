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
      className="w-full text-white bg-blind hover:bg-blind-100 focus:ring-4 focus:outline-none focus:ring-blind-300 font-xl rounded-lg text-xl px-10 py-3 text-center"
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
