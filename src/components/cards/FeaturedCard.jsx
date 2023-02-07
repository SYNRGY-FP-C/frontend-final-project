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
  image: "/images/hero-image.jpg",
  description: "Room 1 description amet consectetur adipisicing",
  price: 1200000,
  address: "Kecamatan Lorem, Bandung",
  type: "campur",
  label: "SuperKost",
  rate: 5,
};

export default function FeaturedCard({ data = defaultData }) {
  const [isFavorite, addFavorite, removeFavorite] = useFavorive(data);
  return (
    <div className="flex-1 border border-gray-200 shadow rounded-2xl hover:shadow-lg">
      <div className="relative flex justify-center object-cover w-full h-64 overflow-hidden">
        <img
          className="object-cover w-full rounded-t-2xl "
          src={data.image}
          alt={data.title}
        />
        <div className="absolute flex flex-row items-center justify-between w-full p-5 gap-x-3">
          <span className="w-24 text-center py-0.5 border bg-base-9 text-primary-1 rounded-lg">
            {data.type}
          </span>
          {isFavorite ? (
            <button onClick={() => removeFavorite(data)}>
              <Love className="w-5 h-5" />
            </button>
          ) : (
            <button onClick={() => addFavorite(data)}>
              <LoveOutline className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      <div className="mx-4 my-3">
        <Link href={`/details/${data.id}`}>
          <h4 className="overflow-hidden text-xl font-semibold text-ellipsis whitespace-nowrap">
            {data.name}
          </h4>
        </Link>
        <div className="inline-flex items-center mt-2 mb-4 gap-x-1">
          <Location className="w-5 h-5 mr-1" />
          <p className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
            {data.address}
          </p>
        </div>
        <div className="flex items-center justify-between pb-4">
          <h5 className="text-base font-bold text-secondary-1">
            {formatRupiah(data.price)}
          </h5>
          <div className="inline-flex items-center justify-center">
            <Star className="w-5 h-5" />
            <p className="mx-1">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
