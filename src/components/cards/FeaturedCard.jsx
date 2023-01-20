/* eslint-disable @next/next/no-img-element */
import Location from "@/components/icons/Location";
import LoveOutline from "@/components/icons/LoveOutline";
import Star from "@/components/icons/Star";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const defaultData = {
  id: 1,
  title:
    "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  image: "/images/hero-image.jpg",
  description: "Room 1 description amet consectetur adipisicing",
  price: 1200000,
  address: "Kecamatan Lorem, Bandung",
  type: "campur",
};

export default function FeaturedCard({ data = defaultData }) {
  return (
    <div className="flex-1 border border-gray-200 rounded-b-lg rounded-t-xl hover:shadow-lg">
      <Link href={`/details/${data.id}`}>
        <div className="relative flex justify-center object-cover w-full h-64 overflow-hidden">
          <img
            className="object-cover w-full rounded-t-lg "
            src={data.image}
            alt={data.title}
          />
          <div className="absolute flex flex-row items-center justify-between w-full p-5 gap-x-3">
            <span className="w-24 text-center py-0.5 border bg-base-900 text-primary-1 rounded-lg">
              {data.type}
            </span>
            <LoveOutline className="w-5 h-5" />
          </div>
        </div>
        <div className="mx-4 my-3">
          <h4 className="overflow-hidden text-xl font-semibold text-ellipsis whitespace-nowrap">
            {data.title}
          </h4>
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
      </Link>
    </div>
  );
}
