import React from "react";

export default function InputWithLabel({
  labelName = "input",
  value = "",
  ...rest
}) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={labelName} className="block text-lg text-base-1">
        {labelName}
      </label>
      <input
        id={labelName}
        name={labelName}
        value={value}
        {...rest}
        className="bg-base-7 focus:bg-base-8 text-primary-1 sm:text-sm border border-base-7 focus:border-primary-3 focus:ring-primary-3 w-full rounded-lg block px-3 py-2.5"
      />
    </div>
  );
}
