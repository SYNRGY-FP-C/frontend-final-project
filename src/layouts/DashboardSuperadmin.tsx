/* eslint-disable @next/next/no-img-element */
import MenuButton from "@/components/buttons/MenuButton";
import ProfileButton from "@/components/buttons/ProfileButton";
import Drawer from "@/components/Drawer";
import NavItem from "@/components/links/NavItem";
import { CMSMenu, superadminMenu } from "@/constants/menu";
import { ROLE_SUPERADMIN } from "@/constants/roles";
import ProtectedPage from "@/layouts/ProtectedPage";
import Sidebar from "@/layouts/SidebarDashboard";
import Head from "next/head";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function DashboardLayout({ children, title = "Dashboard" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <Head>
        <title>{title}</title>
      </Head>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className="flex flex-col gap-y-2">
          {CMSMenu.map((menu) => (
            <li key={uuid()} className="w-full">
              <NavItem href={menu.href} label={menu.title} />
            </li>
          ))}
        </ul>
      </Drawer>
      <div className="flex flex-row">
        <Sidebar menu={CMSMenu} cms />
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
