import SidebarItem from "@/components/links/SidebarItem";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { useRouter } from "next/router";
import Navbar from "@/layouts/Navbar";

export default function Sidebar({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/dashboard",
      title: "Home",
    },
    {
      href: "/dashboard/transaksi",
      title: "Transaksi",
    },
    {
      href: "/dashboard/history",
      title: "Riwayat",
    },
  ];
=======
import { v4 as uuid } from "uuid";
>>>>>>> 8ad7a0375c20b2c7b600d5fafe53503b1143cbcd

export default function Sidebar({ menu, cms = false }) {
  return (
    <div className="flex-col hidden min-h-screen lg:flex">
      <div className="flex flex-col flex-1 md:flex-row">
        <aside className="py-6 bg-primary-1 w-80 gap-y-6">
          <Image
            src="/images/Brand.png"
            alt="logo"
            className="mx-auto"
            width={190}
            height={190}
          />
<<<<<<< HEAD
          <nav className="ml-9">
            <div className="mr-9 mb-9 px-9 py-6 bg-white text-center rounded-lg hover:bg-slate-300">
              <Link href="/dashboard/kost" className="flex items-center gap-1">
                <Image src="/images/add_box.svg" width={24} height={24}></Image>
                <h1>Tambah Kos Baru</h1>
              </Link>
            </div>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="" key={title}>
                  <Link
                    href={href}
                    className={`flex py-6 pl-9 bg-primary-1 text-white rounded-l-lg hover:bg-white cursor-pointer hover:text-primary-1 ${
                      router.asPath === href && " text-primary-1 bg-white"
                    }`}
                  >
                    {title}
                  </Link>
=======
          <nav className="my-6 ml-9 gap-y-3">
            {!cms && (
              <div className="py-6 text-center bg-white rounded-lg mr-9 mb-9 px-9 hover:bg-slate-300">
                <Link href="/dashboard/kost/add" className="flex items-center">
                  <Image
                    src="/images/add_box.svg"
                    alt="KostHub"
                    width={24}
                    height={24}
                  />
                  <h1>Tambah Kos Baru</h1>
                </Link>
              </div>
            )}
            <ul className="flex flex-col gap-y-3">
              {menu.map((menu) => (
                <li className="flex w-full" key={uuid()}>
                  <SidebarItem href={menu.href} label={menu.title} />
>>>>>>> 8ad7a0375c20b2c7b600d5fafe53503b1143cbcd
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
