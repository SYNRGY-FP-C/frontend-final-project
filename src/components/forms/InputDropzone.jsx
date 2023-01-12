import React from "react";

const InputDropzone = () => {
  return (
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center 
        w-full h-64 rounded-lg cursor-pointer 
        bg-gray-100 hover:bg-gray-300 dark:bg-gray-100"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="w-40 h-40 rounded bg-blind"></div>
          <p class="mt-5 text-xl dark:text-blind">Unggah dokumenmu di sini</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  );
};

export default InputDropzone;
