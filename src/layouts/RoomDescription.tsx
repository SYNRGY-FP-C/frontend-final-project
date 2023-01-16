import React from "react";

export default function RoomDescription() {
  return (
    <div className="flex flex-col md:flex-row gap-y-3 gap-x-6">
      <div className="inline-flex items-center gap-x-2">
        <div className="w-5 h-5 rounded-lg bg-primary-1-200"></div> 5
      </div>
      <div className="inline-flex items-center gap-x-2">
        <div className="w-5 h-5 rounded-lg bg-primary-1-200"></div> Campur
      </div>
      <div className="inline-flex items-center gap-x-2">
        <div className="w-5 h-5 rounded-lg bg-primary-1-200"></div> Kecamatan
        Lorem, Bandung
      </div>
      <div className="block">
        <span className="inline-flex items-center px-4 py-1 text-xs text-center bg-gray-200 rounded-lg">
          Superkost
        </span>
      </div>
    </div>
  );
}
