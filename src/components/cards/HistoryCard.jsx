/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RoomCard() {
  return (
    <div className="grid grid-cols-12 shadow rounded-xl">
      <div className="grid col-span-4">
        <div className="flex justify-center object-cover w-full h-64 overflow-hidden">
          <img
            className="object-cover w-full rounded-l-xl"
            src="/images/hero-image.jpg"
            alt="Test"
          />
        </div>
      </div>
      <div className="grid col-span-8 p-5">
        <div className="relative flex flex-col h-full gap-y-3">
          <div className="flex flex-row justify-between">
            <h5 className="text-2xl font-bold text-primary-1">Kost Lorem</h5>
            <div className="flex flex-row gap-x-3">
              <span className="inline-flex items-center px-4 text-xs text-center bg-gray-200 rounded-lg">
                Superkost
              </span>
              <div className="w-8 h-8 rounded-lg bg-primary-1"></div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <div className="w-5 h-5 rounded-lg bg-primary-1"></div>
            <p>Kecamatan Lorem, Bandung</p>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <span className="w-24 text-center py-0.5 border border-gray-300 text-primary-1 rounded-lg">
              Campur
            </span>
            <div className="inline-flex items-center gap-x-1">
              <div className="w-5 h-5 rounded-lg bg-primary-1"></div> 5
            </div>
          </div>
          <div className="flex items-stretch justify-end h-full">
            <p className="inline-flex h-8 items-center px-4 text-center bg-gray-200 rounded mt-auto">
              Selesai September 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
