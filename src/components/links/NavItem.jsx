import clsx from "clsx";
import Link from "next/link";

const NavItem = ({ href = "/", label = "label", isActive = false }) => {
  return (
    <Link
      href={href}
      className={clsx("text-gray-700", {
        "underline decoration-dashed": isActive,
      })}
    >
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
