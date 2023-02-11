/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import Star from "@/components/icons/Star";
import React from "react";

export default function TransactionCard({ data, onAcceptance, onReject }) {
  const [rejectLoading, setRejectLoading] = React.useState(false);
  const [acceptLoading, setAcceptLoading] = React.useState(false);
  const labels = {
    KOST_HITS: "Kost Hits",
    KOST_TERBARU: "Kost Terbaru",
    SUPERKOST: "SuperKost",
  };

  return (
    <div className="grid grid-cols-1 border border-gray-200 hover:shadow lg:grid-cols-12 rounded-xl">
      <div className="grid col-span-4">
        <div className="flex justify-center object-cover w-full overflow-hidden h-60">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
            src={data.thumbnail ?? "/images/Kosthub.png"}
            alt={data.name}
          />
        </div>
      </div>
      <div className="grid col-span-8 p-6">
        <div className="relative flex flex-col h-full gap-y-3">
          <div className="flex flex-col justify-between md:flex-row">
            <h5 className="max-w-xs overflow-hidden text-[20px] font-bold text-base-1 text-ellipsis whitespace-nowrap">
              {data.name}
            </h5>
            <div className="flex flex-row gap-x-3">
              {data?.room_label && (
                <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-center text-white rounded-2xl bg-secondary-1">
                  {labels[data.room_label]}
                </span>
              )}
            </div>
          </div>
          <h4 className="text-base-3">
            Kamar :{" "}
            <span className="max-w-xs overflow-hidden font-bold text-base-1 text-ellipsis whitespace-nowrap">
              {data.room_name}
            </span>
          </h4>
          {/* <div className="flex items-center mt-2 mb-4 gap-x-1">
            <Location className="w-5 h-5 mr-1" />
            <p className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
              {data.room_address}
            </p>
          </div> */}
          <div className="flex flex-col h-full gap-3">
            <div className="flex flex-row items-center gap-x-3">
              <span className="w-24 py-1.5 text-xs text-center border border-base-1 text-base-1 rounded-2xl">
                {data.room_type}
              </span>
              <div className="inline-flex items-center gap-x-1">
                <Star className="w-5 h-5" />{" "}
                <span className="font-bold">{data.rate}</span>
              </div>
            </div>
            <div className="flex items-end justify-end h-full space-x-3">
              <div className="flex items-center gap-3 mb-0">
                <Button
                  type="button"
                  className="w-full px-5 py-2 text-center rounded-lg text-error disabled:bg-primary-2"
                  isLoading={rejectLoading}
                  onClick={async () => {
                    setRejectLoading(true);
                    await onReject();
                    setRejectLoading(false);
                  }}
                >
                  Tolak
                </Button>
                <Button
                  type="button"
                  className="w-full px-5 py-2 text-center text-white rounded-lg bg-primary-1 hover:bg-secondary-1 disabled:bg-primary-2"
                  isLoading={acceptLoading}
                  onClick={async () => {
                    setAcceptLoading(true);
                    await onAcceptance();
                    setAcceptLoading(false);
                  }}
                >
                  Terima
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
