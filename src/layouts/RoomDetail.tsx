import React from "react";

export default function RoomDetail({ title = "Description", children }) {
  return (
    <div className="flex flex-col gap-y-4">
      <h5 className="font-semibold text-[28px] text-blind">{title}</h5>
      {children}
    </div>
  );
}
