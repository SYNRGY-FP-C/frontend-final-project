import Link from "next/link";
import React from "react";
import { MdChevronRight } from "react-icons/md";

export default function BreadCrumb() {
  return (
    <ol className="inline-flex items-center space-x-1 md:space-x-3 mt-16">
      <li className="inline-flex items-center">
        <Link href="/" className="ml-1 text-sm text-primary-1">
          Home
        </Link>
      </li>
      <li className="inline-flex items-center">
        <MdChevronRight className="w-5 h-5 text-primary-1" />
        <Link href="/search" className="ml-1 text-sm text-primary-1">
          Search
        </Link>
      </li>
      <li className="inline-flex items-center">
        <MdChevronRight className="w-5 h-5 text-primary-1" />
        <span className="ml-1 text-sm font-semibold text-primary-1">Title</span>
      </li>
    </ol>
  );
}
