/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const defaultData = {
  id: 1,
  location: "Jakarta, Indonesia",
  description: "Hehehehe Haha",
};

export default function LocationCard({ data = defaultData }) {
  return (
    <div className="relative flex-1">
      <Link href={`/rooms/${data.id}`}>
        <div className="flex justify-center object-cover w-full h-64 overflow-hidden rounded-2xl">
          <img
            className="object-cover w-full"
            src="/images/hero-image.jpg"
            alt={data.location}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
        <div className="absolute z-10 p-1 text-gray-100 left-2 bottom-2">
          <h4 className="text-xl font-semibold">{data.location}</h4>
          <p>{data.description}</p>
        </div>
      </Link>
    </div>
  );
}
