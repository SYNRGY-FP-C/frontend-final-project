import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
      href: "/dashboard/riwayat",
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
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="ml-9" key={title}>
                  <Link
                    href={href}
                    className={`flex py-6 pl-9 bg-primary-1 text-white rounded-l-lg hover:bg-white cursor-pointer hover:text-primary-1 ${
                      router.asPath === href && "bg-white text-primary-1"
                    }`}
                  >
                    {title}{" "}
                    {/* <a
                      className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                        router.asPath === href && 'bg-fuchsia-600 text-white'
                      }`}
                    >
                      {title}
                    </a> */}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
