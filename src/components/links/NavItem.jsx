import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ href = "/", label = "label" }) => {
  const router = useRouter();
  const paths = router.route.split("/");
  const route = "/" + paths[1];
  const isActive = route === href;
  return (
    <Link
      href={href}
      className={clsx("flex px-4 py-3 w-full rounded-lg", {
        ["bg-primary-1 text-white"]: isActive,
        ["hover:bg-primary-1 hover:text-white"]: !isActive,
      })}
    >
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
