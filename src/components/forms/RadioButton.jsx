import React from "react";
import { v4 as uuid } from "uuid";
const RadioButton = ({ value, options, labelName, ...rest }) => {
  return (
    <div className="w-full space-y-2" {...rest}>
      <label htmlFor={labelName} className="block text-lg text-base-1">
        {labelName}
      </label>
      <div className="grid grid-cols-2 gap-8" {...rest}>
        {options.map((option) => (
          <div
            key={uuid()}
            className="flex items-center px-4 border-[1.5px] rounded-lg border-base-2"
          >
            <input
              type="radio"
              defaultChecked={option.value === value}
              value={option.value}
              name={labelName}
              required
              className="w-4 h-4 focus:ring-0 focus:border-0 text-primary-1"
            />
            <label className="w-full py-3 ml-2 text-sm font-medium">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
