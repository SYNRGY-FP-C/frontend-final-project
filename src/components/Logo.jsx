import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link className="text-3xl font-extrabold text-blind" href="/">
      KostHub
    </Link>
  );
}
