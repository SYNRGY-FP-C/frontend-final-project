import React from "react";

type ButtonProps = {
  isLoading?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  isLoading = false,
  className = "w-full px-4 py-3 text-center text-white rounded-lg bg-primary-1 hover:bg-primary-1 disabled:bg-primary-2",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={className} {...rest}>
      {isLoading ? "Memuat..." : children}
    </button>
  );
}
