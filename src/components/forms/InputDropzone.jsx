import React from "react";

const InputDropzone = ({ labelName = "input", ...rest }) => {
  return (
    <div class="flex items-center justify-center w-full">
      <label
        htmlFor={labelName}
        className="block text-lg leading-8 font-bold text-base-1 w-56"
      >
        {labelName}
      </label>
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center 
        w-full h-64 rounded-lg cursor-pointer 
        bg-base-7 hover:bg-gray-300"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <img src="/images/Upload_Large.svg" alt="" />
          <p class="mt-5 text-xl dark:text-primary-1">
            Unggah dokumenmu di sini
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  );
};

export default InputDropzone;
