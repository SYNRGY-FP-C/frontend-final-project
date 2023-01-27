/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import Person from "@/components/icons/Person";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/AuthContext";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

export default function ProfileButton({ menu = [] }) {
  const { logoutUser } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [opexExit, setOpenExit] = React.useState(false);

  return (
    <>
      <Modal isOpen={opexExit} setIsOpen={setOpenExit}>
        <img src="/images/cancel.png" alt="Cancel" className="w-24 h-24" />
        <p className="text-xl text-center text-primary-1">
          Apakah Anda yakin ingin keluar?
        </p>
        <Button
          className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-primary-1"
          onClick={() => setOpenExit(false)}
        >
          Batal
        </Button>
        <Button
          className="inline-flex justify-center w-full px-4 py-3 bg-base-9 border rounded-lg text-primary-1 border-primary-1"
          onClick={() => logoutUser()}
        >
          Keluar
        </Button>
      </Modal>
      <button
        className="relative inline-flex items-center justify-center w-10 h-10 font-medium text-center border border-gray-200 rounded-lg shadow"
        onClick={() => setOpen(!open)}
      >
        <Person className="w-5 h-5" />
      </button>
      {/* Dropdown menu */}
      <div
        className={clsx("pt-2 absolute z-10 -ml-28", {
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
                  "block px-7 py-2 text-center bg-base-9 hover:bg-gray-100",
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
              "block px-9 md:px-9 py-2 text-center bg-base-9 hover:bg-gray-100",
              "rounded-b-lg"
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
