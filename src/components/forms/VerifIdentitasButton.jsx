import React from "react";

const VerifIdentitasButton = () => {
  return (
    <div className="flex gap-4 pt-2">
        <div className="flex items-center mr-4">
          <input id="inline-radio" type="radio" defaultValue name="inline-radio-group" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  " />
          <label htmlFor="inline-radio" className="ml-2 text-sm font-medium">e-KTP</label>
        </div>
        <div className="flex items-center mr-4">
          <input id="inline-2-radio" type="radio" defaultValue name="inline-radio-group" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  " />
          <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium">SIM</label>
        </div>
        <div className="flex items-center mr-4">
          <input defaultChecked id="inline-checked-radio" type="radio" defaultValue name="inline-radio-group" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  " />
          <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium">Passport</label>
        </div>
      </div>
  );
};

export default VerifIdentitasButton;