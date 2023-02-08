/* eslint-disable @next/next/no-img-element */

import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import Link from "next/link";
import React from "react";

export default function KostCard() {
  return (
    <Link
      href="/dashboard"
      className="w-full border rounded-lg hover:shadow-xl shadow-primary-2"
    >
      <img src="/images/hero.png" alt="" className="w-full h-32 rounded-t-lg" />
      <div className="p-4">
        <div className="flex items-center place-content-between">
          <h1 className="font-bold">Kos Binar</h1>
          <h1 className="px-6 py-2 text-xs border border-black rounded-full">
            Putra
          </h1>
        </div>
        <div className="flex items-center">
          <Location className="w-4" />
          <h1 className="ml-3">Kecamatan Lorem, Bandung</h1>
        </div>
        <div className="flex items-center my-5 place-content-between">
          <div className="rounded-full bg-primary-4">
            <h1 className="px-3 py-1 text-xs text-white">Superkost</h1>
          </div>
          <div>
            <div className="flex items-center">
              <Star className="w-6" />
              <h1 className="">5</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
