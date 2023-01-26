/* eslint-disable @next/next/no-img-element */
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import { formatRupiah } from "@/utils/helper";
import React from "react";

export default function OtherRoomCard({ key, name, price, thumbnail, city, district ,rating }) {
  return (
    <div className="shadow w-72 rounded-2xl" key={key}>
      <div className="flex justify-center object-cover h-64 overflow-hidden">
        <img
          className="object-cover w-full rounded-t-2xl"
          src={`/images/${thumbnail}`}
          alt={name}
        />
      </div>
      <div className="flex flex-col p-4 gap-y-3">
        <h5 className="overflow-hidden text-xl font-bold text-primary-1 text-ellipsis whitespace-nowrap">
          {name}
        </h5>
        <div className="inline-flex items-center gap-x-2">
          <Location className="w-5 h-5 mr-1" />
          <p className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
            {`${district}, ${city}`}
          </p>
        </div>
        <div className="inline-flex justify-between">
          <p className="font-bold text-base text-secondary-1">{formatRupiah(price)} / bulan</p>
          <div className="inline-flex items-center gap-x-2">
            <Star className="w-5 h-5" />
            <span className="text-xl font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
