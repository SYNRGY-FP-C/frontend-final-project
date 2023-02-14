/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import Star from "@/components/icons/Star";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import React from "react";

export default function RoomKostCard({ data, href, onDelete }) {
  const [deleteLoading, setDeleteLoading] = React.useState(false);

  const labels = {
    KOST_HITS: "Kost Hits",
    KOST_TERBARU: "Kost Terbaru",
    SUPERKOST: "SuperKost",
  };

  return (
    <div className="grid w-full border border-gray-200 hover:shadow lg:grid-cols-12 rounded-2xl">
      <div className="grid lg:col-span-4">
        <div className="flex justify-center object-cover w-full h-56 overflow-hidden">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-2xl lg:rounded-r-none"
            src={data.thumbnail || "/images/Kosthub.png"}
            alt={data.name}
          />
        </div>
      </div>
      <div className="grid p-6 lg:col-span-8">
        <div className="relative flex flex-col h-full gap-y-3">
          <div className="flex flex-col justify-between md:flex-row">
            <Link href={href}>
              <h5 className="max-w-xs overflow-hidden text-[20px] font-bold text-base-1 text-ellipsis whitespace-nowrap">
                {data.name}
              </h5>
            </Link>
            <div className="flex flex-row items-center gap-3">
              {data?.label && (
                <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-center text-white rounded-2xl bg-secondary-1">
                  {labels[data.label]}
                </span>
              )}
            </div>
          </div>
          {/* <div className="flex flex-row items-center gap-x-2">
            <Location className="w-5 h-5" />
            <p className="max-w-lg overflow-hidden text-base-2 text-ellipsis whitespace-nowrap">
              {data.address}
            </p>
          </div> */}
          <div className="flex flex-row items-center gap-x-3">
            <div className="inline-flex items-center gap-x-1">
              <Star className="w-5 h-5" />{" "}
              <span className="font-bold">{data.rate}</span>
            </div>
            <span className="w-24 py-1.5 text-xs text-center border border-base-1 text-base-1 rounded-2xl">
              {data.type}
            </span>
          </div>
          <div className="flex items-stretch justify-end h-full gap-3">
            <p className="self-end text-xl font-bold text-secondary-1">
              {formatRupiah(data.price)} / bulan
            </p>
          </div>
          <div className="flex items-end justify-end gap-3">
            <div className="block">
              <Button
                className="w-full px-5 py-2 text-center rounded-lg text-error disabled:bg-primary-2"
                isLoading={deleteLoading}
                onClick={async () => {
                  setDeleteLoading(true);
                  await onDelete();
                  setDeleteLoading(false);
                }}
              >
                Hapus
              </Button>
            </div>
            <Link
              href={href}
              className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-lg"
            >
              Ubah
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
