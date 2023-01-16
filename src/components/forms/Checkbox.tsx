import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  id = "checkbox",
  children,
  ...rest
}: CheckboxProps) {
  return (
    <div className="inline-flex items-center">
      <input
        id={id}
        type="checkbox"
        className="w-5 h-5 border-gray-300 rounded"
        {...rest}
      />
      <label
        htmlFor={id}
        className="inline-flex ml-2 text-sm font-medium gap-x-2 text-primary-1"
      >
        {children}
      </label>
    </div>
  );
}
