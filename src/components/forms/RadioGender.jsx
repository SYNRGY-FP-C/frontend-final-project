import React from "react";

const RadioGender = () => {
  return (
    <div className="w-full h-14 border border-black rounded-lg">
      <div className="inline-flex space-x-5 ml-8 h-full items-center">
        <input className="w-5 h-5" type="radio" />
        <h1 className="text-xl">Pria</h1>
      </div>
    </div>
  );
};

export default RadioGender;
