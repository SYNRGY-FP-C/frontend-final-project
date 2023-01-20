/* eslint-disable @next/next/no-img-element */
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import React from "react";

export default function OtherRoomCard() {
  return (
    <div className="shadow w-72 rounded-2xl">
      <div className="flex justify-center object-cover h-64 overflow-hidden">
        <img
          className="object-cover w-full rounded-t-2xl"
          src="/images/hero-image.jpg"
          alt="Test"
        />
      </div>
      <div className="flex flex-col p-4 gap-y-3">
        <h5 className="overflow-hidden text-xl font-bold text-primary-1 text-ellipsis whitespace-nowrap">
          Kamar Medium Kost Lorem
        </h5>
        <div className="inline-flex items-center gap-x-2">
          <Location className="w-5 h-5 mr-1" />
          <p className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
            Kecamatan Lorem, Bandung
          </p>
        </div>
        <div className="inline-flex justify-between">
          <p>Rp2.222.222</p>
          <div className="inline-flex items-center gap-x-2">
            <Star className="w-5 h-5" />
            <span className="text-xl font-semibold">5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
