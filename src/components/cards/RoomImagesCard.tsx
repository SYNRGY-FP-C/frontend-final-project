/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RoomImagesCard({images, select, setSelect}) {
  const rooms = images.room;
  const kost = images.kost;

  const handlePreviewKost = (i) => {

    if(kost[i].url) {
      return setSelect(kost[i].url)
    } 
  }

  const handlePreviewRooms = (i) => {

    if(rooms[i].url) {
      return setSelect(rooms[i].url)
    } 
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-2 lg:gap-y-0 lg:gap-x-2 rounded-2xl">
      <div className="flex w-full col-span-6 max-h-[392px]">
        <div className="flex justify-center object-cover w-full overflow-hidden max-h-48 sm:max-h-72 md:max-h-full">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
            src={`/images/${select}`}
            alt={`/images/${select}`}
          />
        </div>
      </div>

      {/* loop image room */}
      <div className="lg:col-span-6">
        <div className="flex flex-row gap-2 lg:grid lg:grid-cols-2">
      
        {/* loop through image.kost images data */}
        {
          kost.map((value, index) => {
            return <div key={index} className="flex justify-center object-cover w-full overflow-hidden max-h-24 lg:max-h-48">
            <img
              className="object-cover w-full"
              src={`/images/${value.url}`}
              alt={`/images/${value.url}`}
              onClick={() => handlePreviewKost(index)}
            />
          </div>
          })
        }


        {/* loop through image.room data */}
        {
          rooms.map((value, index) => {
              return <div key={index} className="flex justify-center object-cover w-full overflow-hidden max-h-24 lg:max-h-48">
                <img
                  className="object-cover w-full"
                  src={`/images/${value.url}`}
                  alt={`/images/${value.url}`}
                  onClick={() => handlePreviewRooms(index)}
                />
              </div>
          })
        }
        </div>
      </div>
    </div>
  );
}
