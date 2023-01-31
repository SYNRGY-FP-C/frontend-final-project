/* eslint-disable @next/next/no-img-element */
import Location from "@/components/icons/Location";
import More from "@/components/icons/More";
import Star from "@/components/icons/Star";
import clsx from "clsx";
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
  status: "ended",
};

const statuses = {
  onproccess: "Dalam Proses",
  rejected: "Ditolak",
  ended: "Selesai",
  approved: "Disetujui",
  ongoing: "Sedang jalan",
};

export default function HistoryCard({ data = defaultData }) {
  return (
    <div className="grid grid-cols-1 border border-gray-200 hover:shadow lg:grid-cols-12 rounded-xl">
      <div className="grid col-span-4">
        <div className="flex justify-center object-cover w-full overflow-hidden h-60">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
            src={data.image}
            alt={data.name}
          />
        </div>
      </div>
      <div className="grid col-span-8 p-6">
        <div className="relative flex flex-col h-full gap-y-3">
          <div className="flex flex-col justify-between md:flex-row">
            <h5 className="max-w-xs overflow-hidden text-[20px] font-bold text-base-1 text-ellipsis whitespace-nowrap">
              {data.name}
            </h5>
            <div className="flex flex-row gap-x-3">
              <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-center text-white rounded-2xl bg-secondary-1">
                {data.label}
              </span>
            </div>
          </div>
          <div className="inline-flex flex-row items-center gap-x-3">
            <Location className="w-5 h-5" />
            <p className="max-w-lg overflow-hidden text-base-2 text-ellipsis whitespace-nowrap">
              {data.address}
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <span className="w-24 py-1.5 text-xs text-center border border-base-1 text-base-1 rounded-2xl">
              {data.type}
            </span>
            <div className="inline-flex items-center gap-x-1">
              <Star className="w-5 h-5" />{" "}
              <span className="font-bold">{data.rate}</span>
            </div>
          </div>
          <div className="flex items-stretch justify-end h-full">
            <div className="inline-flex self-end space-x-3">
              {Object.hasOwn(statuses, data.status) ? (
                <span
                  className={clsx("px-4 py-1.5 rounded-2xl text-xs", {
                    "bg-gray-200 text-base-1": data.status !== "rejected",
                    "bg-error text-white": data.status === "rejected",
                  })}
                >
                  {statuses[data.status]}
                </span>
              ) : data.status === "approved" ? (
                "Button and Button"
              ) : (
                ""
              )}
              <More />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
