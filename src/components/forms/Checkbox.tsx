import React from "react";

export default function Checkbox({
  label = "checkbox",
  children,
  onChange,
  checked = false,
  ...rest
}) {
  const [isChecked, setIsChecked] = React.useState(checked);
  const handleChange = () => {
    onChange();
    setIsChecked(!isChecked);
  };
  return (
    <div className="inline-flex items-center">
      <input
        id={label}
        type="checkbox"
        checked={isChecked}
        className="w-5 h-5 border rounded-sm border-base-2 focus:ring-0 focus:ring-offset-0 text-base-2 accent-base-2"
        onChange={handleChange}
        {...rest}
      />
      <label
        htmlFor={label}
        className="inline-flex ml-2 text-xs font-medium gap-x-2 text-primary-1"
      >
        {children}
      </label>
    </div>
  );
}
