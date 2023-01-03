import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link className="text-2xl font-extrabold" href="/">
      Belajar
      <span className="text-blue-500">.</span>
    </Link>
  );
}
