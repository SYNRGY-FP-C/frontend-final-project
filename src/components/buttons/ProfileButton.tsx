import Modal from "@/components/Modal";
import variants from "@/constants/variants";
import { useAuth } from "@/contexts/AuthContext";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

export default function ProfileButton({
  variant = "light",
  menu = [],
  image = "/images/hero-image.jpg",
}) {
  const { logoutUser } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [opexExit, setOpenExit] = React.useState(false);

  return (
    <>
      <Modal isOpen={opexExit} setIsOpen={setOpenExit}>
        <p className="text-xl text-center text-blind">
          Apakah Anda yakin ingin keluar?
        </p>
        <button
          className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-blind"
          onClick={() => setOpenExit(false)}
        >
          Batal
        </button>
        <button
          className="inline-flex justify-center w-full px-4 py-3 bg-white border rounded-lg text-blind border-blind"
          onClick={() => logoutUser()}
        >
          Keluar
        </button>
      </Modal>
      <button
        className={clsx(
          "inline-flex relative items-center font-medium text-center rounded-full",
          variants[variant].text,
          variants[variant].bg,
          variants[variant].border
        )}
        onClick={() => setOpen(!open)}
      >
        <Image
          src={image}
          width={40}
          height={40}
          className={clsx(
            "w-10 h-10 border-2 rounded-full bg-gray-500",
            variants[variant].border
          )}
          alt="Profile"
        />
      </button>
      {/* Dropdown menu */}
      <div
        className={clsx("pt-2 absolute z-10", {
          hidden: !open,
          block: open,
        })}
      >
        <div className="flex flex-col rounded-lg shadow">
          {menu.map((item, index) => (
            <div key={uuid()}>
              <Link
                href={item.link}
                className={clsx(
                  "block px-7 py-2 text-center",
                  variants[variant].text,
                  variants["gray"].bg,
                  variants[variant].border,
                  {
                    "rounded-t-lg ": index === 0,
                  }
                )}
              >
                {item.name}{" "}
              </Link>
            </div>
          ))}
          <button
            className={clsx(
              "block px-9 md:px-9 py-2 text-center",
              "rounded-b-lg",
              variants[variant].text,
              variants["gray"].bg,
              variants[variant].border
            )}
            onClick={() => {
              setOpenExit(true);
              setOpen(false);
            }}
          >
            Keluar
          </button>
        </div>
      </div>
    </>
  );
}
