import Eye from "@/components/icons/Eye";
import clsx from "clsx";
import React from "react";

export default function InputPassword({
  show = false,
  setShow,
  labelName = "input",
  errorMessage = "",
  ...rest
}) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={labelName} className="block text-lg text-primary-1">
        {labelName}
      </label>
      <div className="relative flex items-center justify-center w-full mx-auto">
        <input
          id={labelName}
          name={labelName}
          type={show ? "text" : "password"}
          {...rest}
          className={clsx(
            "bg-base-7 focus:bg-base-8 text-primary-1 sm:text-sm border w-full rounded-lg block py-2.5",
            {
              ["border-error focus:border-error focus:ring-error"]:
                errorMessage,
              ["border-base-7  focus:border-primary-3 focus:ring-primary-3"]:
                !errorMessage,
            }
          )}
        />
        <div className="absolute right-3" onClick={setShow}>
          <Eye show={show} className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      {errorMessage ? (
        <span className="text-xs text-error">{errorMessage}</span>
      ) : (
        ""
      )}
    </div>
  );
}
