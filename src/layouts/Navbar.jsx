import { loginMenu, profileMenu, signupMenu } from "@/constants/menu";
import React from "react";

import DropdownButton from "../components/buttons/DropdownButton";
import MenuButton from "../components/buttons/MenuButton";
import ProfileButton from "../components/buttons/ProfileButton";
import Drawer from "../components/Drawer";
import Logo from "../components/Logo";

export default function Navbar({ isAuthenticated = false }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        {!isAuthenticated ? (
          <div className="flex flex-col md:hidden gap-y-3">
            <div className="block">
              <DropdownButton menu={loginMenu} variant="outline">
                Masuk
              </DropdownButton>
            </div>
            <div className="block">
              <DropdownButton menu={signupMenu} variant="primary">
                Buat Akun
              </DropdownButton>
            </div>
          </div>
        ) : (
          <div className="hidden">
            <ProfileButton menu={profileMenu} />
          </div>
        )}
      </Drawer>
      <header className="fixed z-10 w-full">
        <nav className="px-4 py-3 bg-base-900 lg:px-6">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <MenuButton setIsOpen={setIsOpen} />
            <Logo className="w-8 h-8 mr-3" />

            {!isAuthenticated ? (
              <div className="flex-row hidden md:flex gap-x-3">
                <div className="block">
                  <DropdownButton menu={loginMenu} variant="outline">
                    Masuk
                  </DropdownButton>
                </div>
                <div className="block">
                  <DropdownButton menu={signupMenu} variant="primary">
                    Buat Akun
                  </DropdownButton>
                </div>
              </div>
            ) : (
              <div className="block">
                <ProfileButton menu={profileMenu} />
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
