/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RoomImagesCard({ roomImages }) {
  const [image, setImage] = React.useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-2 lg:gap-y-0 lg:gap-x-2 rounded-2xl">
      <div className="flex w-full col-span-6 max-h-[392px]">
        <div className="flex justify-center object-cover w-full overflow-hidden bg-gray-100 max-h-48 sm:max-h-72 md:max-h-full">
          <img
            className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
            src={roomImages[image] ?? "/images/Kosthub.png"}
            alt="Test"
          />
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="flex flex-row gap-2 lg:grid lg:grid-cols-2">
          <div className="flex justify-center object-cover w-full overflow-hidden bg-gray-100 cursor-pointer max-h-24 lg:max-h-48">
            <img
              className="object-cover w-full"
              src={roomImages[0] ?? "/images/Kosthub.png"}
              alt="Test"
              onClick={() => setImage(0)}
            />
          </div>
          <div className="flex justify-center object-cover w-full overflow-hidden bg-gray-100 cursor-pointer max-h-24 lg:max-h-48">
            <img
              className="object-cover w-full lg:rounded-tr-xl"
              src={roomImages[1] ?? "/images/Kosthub.png"}
              alt="Test"
              onClick={() => setImage(1)}
            />
          </div>
          <div className="flex justify-center object-cover w-full overflow-hidden bg-gray-100 cursor-pointer max-h-24 lg:max-h-48">
            <img
              className="object-cover w-full"
              src={roomImages[2] ?? "/images/Kosthub.png"}
              alt="Test"
              onClick={() => setImage(2)}
            />
          </div>
          <div className="flex justify-center object-cover w-full overflow-hidden bg-gray-100 cursor-pointer max-h-24 lg:max-h-48">
            <img
              className="object-cover w-full lg:rounded-br-xl"
              src={roomImages[3] ?? "/images/Kosthub.png"}
              alt="Test"
              onClick={() => setImage(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
