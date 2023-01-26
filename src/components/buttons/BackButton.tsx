import { useRouter } from "next/router";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="inline-flex items-center space-x-2"
      onClick={() => router.back()}
    >
      <span className="text-secondary-1">{"<"}</span>
      <a className="text-secondary-1 text-[20px] font-bold">Kembali</a>
    </button>
  );
}
