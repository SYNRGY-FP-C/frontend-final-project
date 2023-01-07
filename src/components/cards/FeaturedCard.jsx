/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

const defaultData = {
  id: uuid(),
  title:
    "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  description: "Room 1 description amet consectetur adipisicing",
};

export default function FeaturedCard({ data = defaultData }) {
  return (
    <div className="flex-1 rounded-b-lg shadow-lg">
      <Link href={`/rooms/${data.id}`}>
        <div className="relative flex justify-center object-cover w-full h-64 overflow-hidden">
          <img
            className=" object-cover w-full rounded-t-lg"
            src="/images/hero-image.jpg"
            alt={data.title}
          />
          <div className="absolute w-full flex flex-row items-center gap-x-3 justify-between p-5">
          <span className="w-24 text-center py-0.5 border bg-white text-blind rounded-lg">
              Campur
            </span>
          <div className="w-8 h-8 rounded-lg bg-blind ml-auto"></div>
          </div>

        </div>
        <div className="mx-4 my-3">
          <h4 className="overflow-hidden text-xl font-semibold text-ellipsis whitespace-nowrap">
            {data.title}
          </h4>
          <div className="inline-flex gap-x-1 items-center mb-4 mt-2">
            <div className="w-4 h-4 rounded bg-blind"></div>
            <p className="text-xs overflow-hidden text-ellipsis whitespace-nowrap">
              Kecamatan Lorem, Bandung
            </p>
          </div>
          <div className="flex pb-4 items-center">
            <h5 className="text-base">Rp. 222222222</h5>
            <div className="w-5 h-5 rounded-lg bg-blind ml-auto"></div> <p className="mx-1">5</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
