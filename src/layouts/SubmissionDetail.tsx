import React from "react";

export default function SubmissionDetail({ title = "Title", children }) {
  return (
    <div className="grid grid-cols-1 gap-4 my-3 lg:grid-cols-3">
      <div className="col-span-1">
        <h5 className="text-2xl font-semibold text-blind">{title}</h5>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
}
