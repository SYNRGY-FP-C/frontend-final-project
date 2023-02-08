/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const defaultData = {
  id: 1,
  name: "Jakarta",
  image: "/images/hero-image.jpg",
};

export default function nameCard({ data = defaultData }) {
  return (
    <div className="relative flex-1 rounded-lg hover:shadow-xl">
      <Link href="/search">
        <div className="flex justify-center object-cover w-full h-64 overflow-hidden rounded-lg">
          <img
            className="object-cover w-full"
            src={data.image}
            alt={data.name}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black rounded-lg opacity-50" />
        <div className="absolute p-1 left-5 bottom-3">
          <h4 className="text-[28px] font-bold text-gray-100 ">{data.name}</h4>
        </div>
      </Link>
    </div>
  );
}
