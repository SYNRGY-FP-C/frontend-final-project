import React from "react";

const InputDropzone = ({ labelName, icon, preview = null, ...rest }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor={labelName}
        className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-base-7 hover:bg-base-8"
      >
        {preview ? (
          <div className="flex justify-center w-full overflow-hidden object-fit max-h-72 md:max-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover w-full rounded-lg"
              src={preview}
              alt="ID"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-3">
            {icon}
            <p className="text-base-3">Unggah dokumenmu di sini</p>
          </div>
        )}

        <input
          id={labelName}
          type="file"
          className="hidden"
          {...rest}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default InputDropzone;
