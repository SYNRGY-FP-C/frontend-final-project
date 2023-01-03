import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

import { formatRupiah } from "../../utils/helper";

const defaultData = {
  id: uuid(),
  name: "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  description: "Room 1 description",
  type: "Male",
  price: 600000,
  payment_period: "Monthly",
  location: "Jakarta",
  thumbnail: "https://front-page.zekhoi.dev/images/hero-image.jpg",
  facilities: ["AC", "WiFi", "Free parking", "Free parking", "Free breakfast"],
};

export default function RoomCard({ data = { defaultData } }) {
  return (
    <div className="max-w-xs text-sm bg-white">
      <Link href={`/rooms/${data.id}`}>
        <div className="flex justify-center object-cover w-full h-48 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover w-full rounded"
            src={data.thumbnail}
            alt={data.description}
          />
        </div>
        <div className="py-2 space-y-1">
          <span className="px-2 py-1 text-xs font-semibold text-gray-700 border rounded">
            {data.type}
          </span>
          <h5 className="overflow-x-hidden text-gray-700 text-ellipsis whitespace-nowrap">
            {data.name}
          </h5>
          <span className="font-medium text-gray-800">{data.location}</span>
          <div className="w-full py-2 space-x-2 overflow-x-hidden divide-x divide-dashed text-ellipsis whitespace-nowrap">
            {data.facilities.map((facility) => (
              <span key={uuid()} className="text-gray-600 text-xs px-1 py-0.5">
                {facility}
              </span>
            ))}
          </div>
          <span className="mt-2 text-base font-medium text-gray-800">
            {formatRupiah(data.price)} {data.payment_period}
          </span>
        </div>
      </Link>
    </div>
  );
}
