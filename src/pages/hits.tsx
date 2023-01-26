/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/buttons/BackButton";
import RoomCard from "@/components/cards/RoomCard";
import SearchBar from "@/components/forms/SearchBar";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";

export default function Hits() {
  return (
    <DefaultLayout title="Kost Hits">
      <Section>
        <div className="flex pt-24 pb-4 gap-y-4">
          <div className="grid h-full grid-cols-12 gap-y-3">
            <div className="grid w-full col-span-12 lg:col-span-4 place-items-start">
              <div className="flex flex-col gap-y-3">
                <BackButton />
                <h2 className="text-3xl lg:text-[40px] font-bold text-base-1">
                  Kost Hits
                </h2>
                <p>Ditemukan 50 kost-kostan</p>
              </div>
            </div>
            <div className="grid h-full col-span-12 lg:col-span-8 md:px-4">
              <div className="flex flex-col">
                <SearchBar placeholder="Cari berdasarkan kota" />
                <div className="flex flex-col w-full h-full py-6 gap-y-6">
                  <RoomCard />
                  <RoomCard />
                  <RoomCard />
                  <RoomCard />
                  <RoomCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
