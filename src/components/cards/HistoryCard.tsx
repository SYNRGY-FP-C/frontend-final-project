/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const defaultData = {
  id: 1,
  name: "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  thumbnail: "/images/hero-image.jpg",
  description: "Room 1 description amet consectetur adipisicing",
  price: 1200000,
  address: "Kecamatan Lorem, Bandung",
  type: "campur",
  label: "SuperKost",
  rate: 5,
  status: "ended",
};

const statuses = {
  ONPROCCESS: "Dalam proses verifikasi",
  PENDING: "Dalam proses",
  REJECTED: "Ditolak",
  ENDED: "Selesai",
  APPROVED: "Disetujui",
  ONGOING: "Sedang jalan",
};

const labels = {
  KOST_HITS: "Kost Hits",
  KOST_TERBARU: "Kost Terbaru",
  SUPERKOST: "SuperKost",
};

export default function HistoryCard({ data = defaultData }) {
  return (
    <div className="grid grid-cols-1 border border-gray-200 hover:shadow lg:grid-cols-12 rounded-xl">
      <div className="grid col-span-4">
        <div className="flex justify-center object-cover w-full overflow-hidden h-60">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
            src={data.thumbnail ?? "/images/Kosthub.png"}
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
              {data?.label && (
                <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-center text-white rounded-2xl bg-secondary-1">
                  {labels[data.label]}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mt-2 mb-4 gap-x-1">
            <Location className="w-5 h-5 mr-1" />
            <p className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
              {data.address}
            </p>
          </div>
          <div className="flex flex-col h-full gap-3">
            <div className="flex flex-row items-center gap-x-3">
              <span className="w-24 py-1.5 text-xs text-center border border-base-1 text-base-1 rounded-2xl">
                {data.type}
              </span>
              <div className="inline-flex items-center gap-x-1">
                <Star className="w-5 h-5" />{" "}
                <span className="font-bold">{data.rate}</span>
              </div>
            </div>
            <div className="flex items-end justify-end h-full space-x-3">
              {data.status === "REJECTED" ||
              data.status === "PENDING" ||
              data.status === "ENDED" ? (
                <div className="flex items-center gap-3">
                  <span
                    className={clsx("px-4 py-1.5 rounded-2xl text-xs", {
                      ["bg-gray-200 text-base-1"]: data.status !== "REJECTED",
                      ["bg-error text-white"]: data.status === "REJECTED",
                    })}
                  >
                    {statuses[data.status]}
                  </span>
                </div>
              ) : data.status === "APPROVED" ? (
                <div className="flex items-center gap-3">
                  <Button className="w-full px-5 py-2 text-center rounded-lg text-error disabled:bg-primary-2">
                    Batalkan
                  </Button>
                  <Link key={data.id} href={`/my/payment/${data.id}`}>
                    <Button
                      type="button"
                      className="w-full px-5 py-2 text-center text-white rounded-lg bg-primary-1 hover:bg-secondary-1 disabled:bg-primary-2"
                    >
                      Bayar
                    </Button>
                  </Link>
                </div>
              ) : (
                data.status === "APPROVED" && (
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-2xl text-xs bg-gray-200 text-base-1">
                      {statuses[data.status]}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
