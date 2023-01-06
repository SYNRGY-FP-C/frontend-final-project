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
    <div className="flex-1">
      <Link href={`/rooms/${data.id}`}>
        <div className="flex justify-center object-cover w-full h-64 overflow-hidden">
          <img
            className="object-cover w-full rounded-2xl"
            src="/images/hero-image.jpg"
            alt={data.title}
          />
        </div>
        <div className="m-2">
          <h4 className="overflow-hidden text-xl font-semibold text-ellipsis whitespace-nowrap">
            {data.title}
          </h4>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {data.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
