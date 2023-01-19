/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const defaultData = {
  id: 1,
  location: "Jakarta",
};

export default function LocationCard({ data = defaultData }) {
  return (
    <div className="relative flex-1">
      <Link href={`/details/${data.id}`}>
        <div className="flex justify-center object-cover w-full h-64 overflow-hidden rounded-2xl">
          <img
            className="object-cover w-full"
            src="/images/hero-image.jpg"
            alt={data.location}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl" />
        <div className="absolute z-10 p-1 text-gray-100 left-5 bottom-3">
          <h4 className="text-[28px] font-bold">{data.location}</h4>
        </div>
      </Link>
    </div>
  );
}
