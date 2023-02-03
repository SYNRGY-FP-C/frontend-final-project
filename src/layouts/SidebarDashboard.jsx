import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/layouts/Navbar"

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

  return (
    <div className="min-h-screen flex flex-col fixed">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-primary-1 w-80">
          <Image
            src="/images/Brand.png"
            alt="logo"
            className="mx-auto mt-20 mb-12"
            width={190}
            height={190}
          />
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
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        
      </div>

    </div>
  );
}
