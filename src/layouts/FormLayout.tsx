import React from "react";

type FormLayoutProps = {
  title?: string;
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

export default function FormLayout({
  title = "Title",
  children,
  ...rest
}: FormLayoutProps) {
  return (
    <div className="w-full bg-white rounded shadow md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          {title}
        </h1>
        <form className="space-y-3 md:space-y-4" {...rest}>
          {children}
        </form>
      </div>
    </div>
  );
}
