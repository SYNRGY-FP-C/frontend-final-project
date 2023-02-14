/* eslint-disable @next/next/no-img-element */
import Call from "@/components/icons/Call";
import GooglePlay from "@/components/icons/GooglePlay";
import KostHub from "@/components/icons/KostHub";
import Mail from "@/components/icons/Mail";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-base-1 md:p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-between gap-6 py-6 lg:flex-row">
          <div className="flex flex-col lg:max-w-sm gap-y-6">
            <Link
              className="inline-flex items-center text-3xl font-extrabold text-white"
              href="/"
            >
              <KostHub className="w-8 h-8 mr-3" color="white" /> KostHub
            </Link>
            <p className="text-white ">Cari Kost Makin Mudah Dengan KostHub!</p>
            <GooglePlay className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-y-3">
            <h5 className="font-bold text-white">KostHub</h5>
            <ul className="flex flex-col text-white gap-y-3">
              <li>
                <Link href="/about">Tentang Kami</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <h5 className="font-bold text-white">Kebijakan</h5>
            <ul className="flex flex-col text-white gap-y-3">
              <li>
                <Link href="/help">Pusat Bantuan</Link>
              </li>
              <li>
                <Link href="/tos">Syarat & Ketentuan</Link>
              </li>
              <li>
                <Link href="/privacy">Kebijakan Privasi</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <h5 className="font-bold text-white">Hubungi Kami</h5>
            <ul className="flex flex-col text-white gap-y-3">
              <li className="inline-flex space-x-1">
                <Mail className="w-5 h-5 mr-3" color="white" />
                <a href="mailto:cs@kosthub.com">cs@kosthub.com</a>
              </li>
              <li className="inline-flex space-x-1">
                <Call className="w-5 h-5 mr-3" color="white" />
                <a href="tel:088888888888">0888-8888-8888</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-[0.1px] my-4 bg-base-400" />
        <p className="my-3 text-center text-white">
          © {new Date().getFullYear()} KostHub.com, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
