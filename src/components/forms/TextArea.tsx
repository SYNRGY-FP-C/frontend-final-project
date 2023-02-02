import React from "react";

export default function TextArea({ ...rest }) {
  return (
    <textarea
      className="p-2.5 bg-base-7 focus:bg-base-8 text-primary-1 h-28 resize-none sm:text-sm border border-base-7 focus:border-primary-3 focus:ring-primary-3 w-full rounded-lg block"
      {...rest}
    ></textarea>
  );
}
