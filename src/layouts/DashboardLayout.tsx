/* eslint-disable @next/next/no-img-element */
import MenuButton from "@/components/buttons/MenuButton";
import ProfileButton from "@/components/buttons/ProfileButton";
import Drawer from "@/components/Drawer";
import NavItem from "@/components/links/NavItem";
import { dashboardMenu } from "@/constants/menu";
import { superadminMenu } from "@/constants/menu";
import { ROLE_ADMIN } from "@/constants/roles";
import ProtectedPage from "@/layouts/ProtectedPage";
import Sidebar from "@/layouts/SidebarDashboard";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function DashboardLayout({ children, title = "Dashboard" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <Head>
        <title>{title}</title>
      </Head>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Link
          href="/dashboard/kost/add"
          className="flex w-full p-4 space-x-1 text-white rounded-lg bg-primary-1"
        >
          <Image
            src="/images/add_box.svg"
            alt="KostHub"
            width={24}
            height={24}
          />
          <span>Tambah Kos Baru</span>
        </Link>
        <ul className="flex flex-col gap-y-2">
          {dashboardMenu.map((menu) => (
            <li key={uuid()} className="w-full">
              <NavItem href={menu.href} label={menu.title} />
            </li>
          ))}
        </ul>
      </Drawer>
      <div className="flex flex-row">
        <Sidebar menu={dashboardMenu} />
        <div className="flex flex-col w-full px-4 py-4 lg:px-6 gap-y-6">
          <div className="flex flex-row justify-between gap-4">
            <div className="block">
              <MenuButton setIsOpen={setIsOpen} />
            </div>
            <div className="block">
              <ProfileButton menu={superadminMenu} />
            </div>
          </div>
          {children}
        </div>
      </div>
    </ProtectedPage>
  );
}
