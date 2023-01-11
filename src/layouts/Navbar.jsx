import { loginMenu, profileMenu, signupMenu } from "@/constants/menu";
import React from "react";

import AuthButton from "../components/buttons/AuthButton";
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
              <AuthButton menu={loginMenu}>Masuk</AuthButton>
            </div>
            <div className="block">
              <AuthButton menu={signupMenu} variant="dark">
                Buat Akun
              </AuthButton>
            </div>
          </div>
        ) : (
          <div className="hidden">
            <ProfileButton menu={profileMenu} />
          </div>
        )}
      </Drawer>
      <header>
        <nav className="px-4 py-6 bg-white border-gray-200 lg:px-6">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <MenuButton setIsOpen={setIsOpen} />
            <Logo />

            {!isAuthenticated ? (
              <div className="flex-row hidden md:flex gap-x-3">
                <div className="block">
                  <AuthButton menu={loginMenu}>Masuk</AuthButton>
                </div>
                <div className="block">
                  <AuthButton menu={signupMenu} variant="dark">
                    Buat Akun
                  </AuthButton>
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
