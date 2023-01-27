import React from "react";

export default function DescriptionItem({ children, ...rest }) {
  return (
    <div className="inline-flex items-center gap-x-2" {...rest}>
      <div className="w-4  h-4 rounded-lg bg-primary-1"></div>
        {children}
    </div>
  );
}
