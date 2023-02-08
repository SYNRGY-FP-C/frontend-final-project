import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import React from "react";

export default function RoomDescription({ room }) {
  return (
    <div className="flex flex-col md:flex-row gap-y-3 gap-x-6">
      <div className="inline-flex items-center gap-x-2">
        <Star className="w-5 h-5" />
        <p className="mx-1">{room?.rating}</p>
      </div>

      <div className="inline-flex items-center gap-x-2">
        <Location className="w-5 h-5 mr-1" />{" "}
        {`${room?.location?.district}, ${room?.location?.city}`}
      </div>
      <div className="block">
        <span className="inline-flex items-center px-4 py-1 text-xs text-center border border-black rounded-full">
          {room?.type}
        </span>
      </div>
    </div>
  );
}
