import React from "react";

export default function FormCard({ title = "Title", children, ...rest }) {
  return (
    <div className="w-full bg-white rounded shadow md:mt-0 xl:p-0">
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
