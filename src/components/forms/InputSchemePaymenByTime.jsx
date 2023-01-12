import React from "react";

export default function InputSchemePaymenByTime({ labelName = "input",value , ...rest }) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={labelName} className="block text-lg text-blind">
        {labelName}
      </label>
      <select 
        id={labelName}
        label={labelName}
        {...rest}
        className="bg-gray-100 text-blind sm:text-sm border-0 w-full rounded-lg block p-2.5"
      >  
        <option value="">Please Choose</option>
        <option value="1 bulan">1 Bulan</option>
        <option value="2 bulan">2 Bulan</option>
        <option value="3 bulan">3 Bulan</option>
      </select>
    </div>
  );
}
