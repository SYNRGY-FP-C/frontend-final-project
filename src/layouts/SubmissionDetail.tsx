import Link from "next/link";
import React from "react";

export default function SubmissionDetail({ title = "Title", children }) {
  return (
    <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-3">
      <div className="col-span-1">
        <div className="inline-flex items-center gap-x-2">
          <h5 className="text-2xl font-semibold text-primary-1">{title}</h5>
          {title === "Profil Pencari" ? (
            <Link href="/my" className="mt-2 mr-4 underline">
              Ubah
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
}
