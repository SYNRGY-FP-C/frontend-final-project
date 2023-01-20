import React from "react";

export default function WhyUsCard({ image = "", title = "", children }) {
  return (
    <div className="flex flex-col items-center max-w-sm text-center gap-y-3">
      <div className="h-64">
        <img src={image} alt={title} className="max-w-52" />
      </div>
      <h5 className="text-[20px] text-base-100 font-semibold">{title}</h5>
      <p className="text-[#454848]">{children}</p>
    </div>
  );
}
