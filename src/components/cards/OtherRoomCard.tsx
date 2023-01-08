/* eslint-disable @next/next/no-img-element */
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
        <h5 className="overflow-hidden text-xl font-bold text-blind text-ellipsis whitespace-nowrap">
          Title
        </h5>
        <div className="inline-flex items-center gap-x-2">
          <div className="w-4 h-4 rounded-lg bg-blind-200"></div>
          <p className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
            Kecamatan Lorem, Bandung
          </p>
        </div>
        <div className="inline-flex justify-between">
          <p>Rp2.222.222</p>
          <div className="inline-flex items-center gap-x-2">
            <div className="w-5 h-5 rounded-lg bg-blind-200"></div>
            <span className="text-xl font-semibold">5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
