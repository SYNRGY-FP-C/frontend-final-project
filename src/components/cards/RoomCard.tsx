/* eslint-disable @next/next/no-img-element */
import Location from "@/components/icons/Location";
import LoveOutline from "@/components/icons/LoveOutline";
import Star from "@/components/icons/Star";
import { formatRupiah } from "@/utils/helper";
import React from "react";

const defaultData = {
  id: 1,
  name: "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  image: "/images/hero-image.jpg",
  description: "Room 1 description amet consectetur adipisicing",
  price: 1200000,
  address: "Kecamatan Lorem, Bandung",
  type: "campur",
  label: "SuperKost",
  rate: 5,
};

export default function RoomCard({ data = defaultData }) {
  return (
    <div className="grid grid-cols-1 border border-gray-200 hover:shadow lg:grid-cols-12 rounded-2xl">
      <div className="grid col-span-4">
        <div className="flex justify-center object-cover w-full h-56 overflow-hidden">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-2xl lg:rounded-r-none"
            src={data.image}
            alt={data.name}
          />
        </div>
      </div>
      <div className="grid col-span-8 p-6">
        <div className="relative flex flex-col h-full gap-y-3">
          <div className="flex flex-col justify-between md:flex-row">
            <h5 className="max-w-xs overflow-hidden text-[20px] font-bold text-base-100 text-ellipsis whitespace-nowrap">
              {data.name}
            </h5>
            <div className="flex flex-row items-center gap-3">
              <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-center text-white rounded-2xl bg-secondary-1">
                {data.label}
              </span>
              <LoveOutline className="w-5 h-5" color="dark" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <Location className="w-5 h-5" />
            <p className="max-w-lg overflow-hidden text-base-200 text-ellipsis whitespace-nowrap">
              {data.address}
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <div className="inline-flex items-center gap-x-1">
              <Star className="w-5 h-5" />{" "}
              <span className="font-bold">{data.rate}</span>
            </div>
            <span className="w-24 py-1.5 text-xs text-center border border-base-100 text-base-100 rounded-2xl">
              {data.type}
            </span>
          </div>
          <div className="flex items-stretch justify-end h-full">
            <p className="self-end text-xl font-bold text-secondary-1">
              {formatRupiah(data.price)} / bulan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
