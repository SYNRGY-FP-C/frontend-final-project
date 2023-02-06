import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function SidebarItem({ href, label }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={clsx("py-4 pl-9 rounded-l-lg w-full", {
        ["bg-white text-primary-1"]: isActive,
        ["hover:bg-white hover:text-primary-1 bg-primary-1 text-white"]:
          !isActive,
      })}
    >
      {label}
    </Link>
  );
}
