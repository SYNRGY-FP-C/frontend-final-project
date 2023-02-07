import React from "react";

export default function InputWithLabel({ labelName = "input", ...rest }) {
  return (
    <div className="flex w-full space-y-2 items-center">
      <label
        htmlFor={labelName}
        className="block text-lg leading-8 font-bold text-base-1 w-56"
      >
        {labelName}
      </label>
      <input
        id={labelName}
        name={labelName}
        {...rest}
        className="  focus:bg-base-8 text-primary-1 sm:text-sm border border-base-7 focus:border-primary-3 focus:ring-primary-3 w-full rounded-lg block px-3 py-2.5"
      />
    </div>
  );
}
