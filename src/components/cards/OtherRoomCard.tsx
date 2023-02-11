/* eslint-disable @next/next/no-img-element */
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import useFavorive from "@/hooks/useFavorite";
import { formatRupiah } from "@/utils/helper";

import Love from "../icons/Love";
import LoveOutline from "../icons/LoveOutline";

export default function OtherRoomCard({ room }) {
  const [isFavorite, addFavorite, removeFavorite] = useFavorive(room);
  return (
    <div className="shadow w-72 rounded-2xl">
      <div className="relative flex justify-center object-cover w-full h-64 overflow-hidden">
        <img
          className="object-cover w-full rounded-t-2xl"
          src={room.thumbnail ?? "/images/Kosthub.png"}
          alt={room?.name}
        />
        <div className="absolute flex flex-row items-center justify-end w-full p-5 gap-x-3">
          {isFavorite ? (
            <button onClick={() => removeFavorite(room)}>
              <Love className="w-5 h-5" />
            </button>
          ) : (
            <button onClick={() => addFavorite(room)}>
              <LoveOutline className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-y-3">
        <h5 className="overflow-hidden text-xl font-bold text-primary-1 text-ellipsis whitespace-nowrap">
          {room?.name}
        </h5>
        <div className="inline-flex items-center gap-x-2">
          <Location className="w-5 h-5 mr-1" />
          <p className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
            {`${room?.location?.district}, ${room?.location?.city}`}
          </p>
        </div>
        <div className="inline-flex justify-between">
          <p className="text-base font-bold text-secondary-1">
            {formatRupiah(room?.price)} / bulan
          </p>
          <div className="inline-flex items-center gap-x-2">
            <Star className="w-5 h-5" />
            <span className="text-xl font-semibold">{room?.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
