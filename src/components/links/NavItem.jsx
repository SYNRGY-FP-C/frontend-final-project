import clsx from "clsx";
import Link from "next/link";

const NavItem = ({ href = "/", label = "label", isActive = false }) => {
  return (
    <Link
      href={href}
      className={clsx(
        isActive ? "font-bold text-gray-800" : "font-normal text-gray-600",
        "rounded p-1 transition-all hover:bg-gray-200 sm:px-3 sm:py-2 md:inline-block"
      )}
    >
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
