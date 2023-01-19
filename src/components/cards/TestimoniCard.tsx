/* eslint-disable @next/next/no-img-element */
import Person from "@/components/icons/Person";
import Quote from "@/components/icons/Quote";
import React from "react";

export default function TestimoniCard({
  name = "Nama",
  occupation = "Mahasiswa",
  children,
}) {
  return (
    <div className="p-8 bg-base-900 rounded-2xl">
      <div className="flex flex-col gap-y-3">
        <Quote className="w-10 h-10" />
        <p className="mt-3 text-justify">{children}</p>
        <div className="flex flex-row space-x-3">
          <div className="flex items-center justify-center float-left w-16 h-16 bg-gray-100 rounded-full">
            <Person className="w-8 h-8" />
          </div>
          <div className="flex flex-col text-left">
            <h5 className="space-y-3 text-xl font-bold">{name}</h5>
            <p>{occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
