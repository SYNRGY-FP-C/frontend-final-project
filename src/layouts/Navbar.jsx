import DropdownButton from "@/components/buttons/DropdownButton";
import MenuButton from "@/components/buttons/MenuButton";
import ProfileButton from "@/components/buttons/ProfileButton";
import Drawer from "@/components/Drawer";
import Logo from "@/components/Logo";
import {
  adminMenu,
  loginMenu,
  signupMenu,
  superadminMenu,
  userMenu,
} from "@/constants/menu";
import { ROLE_ADMIN, ROLE_USER } from "@/constants/roles";
import { useAuth } from "@/contexts/AuthContext";
import React from "react";

export default function Navbar({ isAuthenticated = false }) {
  const { user } = useAuth();
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
            {user.role === ROLE_USER ? (
              <ProfileButton menu={userMenu} />
            ) : (
              <ProfileButton menu={adminMenu} />
            )}
          </div>
        )}
      </Drawer>
      <header className="fixed z-10 w-full">
        <nav className="px-4 py-3 bg-base-10 lg:px-6">
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
                {user.role === ROLE_USER ? (
                  <ProfileButton menu={userMenu} />
                ) : user.role === ROLE_ADMIN ? (
                  <ProfileButton menu={adminMenu} />
                ) : (
                  <ProfileButton menu={superadminMenu} />
                )}
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
