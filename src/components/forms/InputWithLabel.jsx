import React from "react";

export default function InputWithLabel({ labelName = "input", ...rest }) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={labelName} className="block text-lg text-primary-1">
        {labelName}
      </label>
      <input
        id={labelName}
        name={labelName}
        {...rest}
        className="bg-gray-100 text-primary-1 sm:text-sm border-0 w-full rounded-lg block p-2.5"
      />
    </div>
  );
}
