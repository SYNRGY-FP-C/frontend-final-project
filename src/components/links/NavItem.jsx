import clsx from "clsx";
import Link from "next/link";

const NavItem = ({
  href = "/",
  label = "label",
  isActive = false,
  variant = "light",
}) => {
  const variants = {
    light: {
      text: "text-gray-700",
    },
    dark: {
      text: "text-white",
    },
  };
  return (
    <Link
      href={href}
      className={clsx(variants[variant].text, {
        "underline decoration-dashed": isActive,
      })}
    >
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
