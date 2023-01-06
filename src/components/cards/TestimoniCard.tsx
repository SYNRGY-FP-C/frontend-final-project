/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function TestimoniCard({ name = "Nama" }) {
  return (
    <div className="p-6 bg-white rounded-2xl">
      <div className="flex flex-row items-end gap-x-6">
        <figure className="float-left rounded">
          <div className="flex justify-center object-cover w-24 h-24 overflow-hidden">
            <img
              className="object-cover w-full rounded-2xl"
              src="/images/hero-image.jpg"
              alt={name}
            />
          </div>
        </figure>
        <div>
          <h5 className="text-xl font-bold">{name}</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <p className="mt-3 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        provident quas aut esse eaque iusto impedit ab aliquam omnis excepturi,
        tempora libero dolores adipisci asperiores doloribus minima dolore
        accusantium quasi.
      </p>
    </div>
  );
}
