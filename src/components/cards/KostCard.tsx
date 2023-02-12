/* eslint-disable @next/next/no-img-element */

import Button from "@/components/buttons/Button";
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import Link from "next/link";
import React from "react";

export default function KostCard({ data, onDelete }) {
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  return (
    <div className="w-full border rounded-lg hover:shadow-xl shadow-primary-2">
      <Link href={`/dashboard/kost/${data?.id}/rooms`}>
        <div className="flex justify-center object-cover w-full h-32 overflow-hidden rounded-t-lg">
          <img
            className="object-cover w-full rounded-t-lg"
            src={data.image ?? "/images/Kosthub.png"}
            alt={data.image}
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-center place-content-between">
          <Link href={`/dashboard/kost/${data?.id}/rooms`}>
            <h1 className="font-bold">{data?.name}</h1>
          </Link>
          <h1 className="px-6 py-2 text-xs border border-black rounded-full">
            {data?.type}
          </h1>
        </div>
        <div className="flex items-center">
          <Location className="w-4" />
          <h1 className="ml-3">{data.address}</h1>
        </div>
        <div className="flex items-end my-5 place-content-between">
          {/* <div className="rounded-full bg-primary-4">
            <h1 className="px-3 py-1 text-xs text-white">{data?.label}</h1>
          </div> */}
          <div className="flex items-center">
            <Star className="w-6" />
          </div>
          <div className="flex gap-3">
            <Button
              className="w-full px-5 py-2 text-center rounded-lg text-error disabled:bg-primary-2"
              isLoading={deleteLoading}
              onClick={async () => {
                setDeleteLoading(true);
                await onDelete();
                setDeleteLoading(false);
              }}
            >
              Hapus
            </Button>
            <Link
              href={`/dashboard/kost/${data?.id}`}
              className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-lg"
            >
              Ubah
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
