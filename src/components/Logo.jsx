import KostHub from "@/components/icons/KostHub";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      className="inline-flex items-center text-3xl font-extrabold text-primary-1"
      href="/"
    >
      <KostHub className="w-8 h-8 mr-3" /> KostHub
    </Link>
  );
}
