import SidebarItem from "@/components/links/SidebarItem";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";

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
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
