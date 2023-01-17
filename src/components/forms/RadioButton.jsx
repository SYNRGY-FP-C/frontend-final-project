import React from "react";

const RadioButton = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="bordered-radio-1" type="radio" defaultValue name="bordered-radio" className="w-4 h-4 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium">Laki-Laki</label>
        </div>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input defaultChecked id="bordered-radio-2" type="radio" defaultValue name="bordered-radio" className="w-4 h-4 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium">Perempuan</label>
        </div>
    </div>
  );
};

export default RadioButton;