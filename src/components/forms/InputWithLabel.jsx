import React from "react";

export default function InputWithLabel({ labelName = "input", ...rest }) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={labelName}
        className="block text-xl font-medium text-blind"
      >
        {labelName}
      </label>
      <input
        id={labelName}
        name={labelName}
        {...rest}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
      />
    </div>
  );
}
