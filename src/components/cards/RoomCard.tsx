/* eslint-disable @next/next/no-img-element */
import Location from "@/components/icons/Location";
import Love from "@/components/icons/Love";
import LoveOutline from "@/components/icons/LoveOutline";
import Star from "@/components/icons/Star";
import useFavorive from "@/hooks/useFavorite";
import { formatRupiah } from "@/utils/helper";
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
};

export default function RoomCard({ data = defaultData }) {
  const [isFavorite, addFavorite, removeFavorite] = useFavorive(data);

  const labels = {
    KOST_HITS: "Kost Hits",
    KOST_TERBARU: "Kost Terbaru",
    SUPERKOST: "SuperKost",
  };

  return (
    <div className="grid grid-cols-1 border border-gray-200 hover:shadow lg:grid-cols-12 rounded-2xl">
      <div className="grid col-span-4">
        <div className="flex justify-center object-cover w-full h-56 overflow-hidden">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-2xl lg:rounded-r-none"
            src={
              data.thumbnail == "null" || !data.thumbnail
                ? "/images/Kosthub.png"
                : data.thumbnail
            }
            alt={data.name}
          />
        </div>
      </div>
      <div className="grid col-span-8 p-6">
        <div className="relative flex flex-col h-full gap-y-3">
          <div className="flex flex-col justify-between md:flex-row">
            <Link href={`/details/${data.id}`}>
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
              {isFavorite ? (
                <button onClick={() => removeFavorite(data)}>
                  <Love className="w-5 h-5" />
                </button>
              ) : (
                <button onClick={() => addFavorite(data)}>
                  <LoveOutline className="w-5 h-5" color="dark" />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Location className="w-5 h-5" />
            <div className="block">
              <p className="max-w-xs overflow-hidden lg:max-w-sm text-base-2 text-ellipsis whitespace-nowrap">
                {data.address}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <div className="inline-flex items-center gap-x-1">
              <Star className="w-5 h-5" />{" "}
              <span className="font-bold">{data.rate}</span>
            </div>
            <span className="w-24 py-1.5 text-xs text-center border border-base-1 text-base-1 rounded-2xl">
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
