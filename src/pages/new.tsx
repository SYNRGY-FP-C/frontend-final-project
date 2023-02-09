/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/buttons/BackButton";
import RoomCard from "@/components/cards/RoomCard";
import SearchBar from "@/components/forms/SearchBar";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React, { useState, useEffect } from "react";

export default function New() {
  // Tambahan
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
  });

  const [news, setnews] = useState([
    {
      id: 1,
      title:
        "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/hero-image.jpg",
      description: "Room 1 description amet consectetur adipisicing",
      price: 1200000,
      address: "Kecamatan Lorem, Bandung",
      type: "campur",
    },
    {
      id: 1,
      title:
        "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/hero-image.jpg",
      description: "Room 1 description amet consectetur adipisicing",
      price: 1200000,
      address: "Kecamatan Lorem, Bandung",
      type: "campur",
    },
  ]);

  useEffect(() => {
    const tempNews = JSON.parse(localStorage.getItem("baru")) || [];
    if (tempNews.length > 0) {
      setnews(news);
    }
  }, []);
  // Akhir Tambahan
  return (
    <DefaultLayout title="Kost Terbaru">
      <Section>
        <div className="flex flex-col pt-24 pb-4 gap-y-4">
          <div className="grid h-full grid-cols-12 gap-y-3">
            <div className="grid w-full col-span-12 lg:col-span-4 place-items-start">
              <div className="flex flex-col gap-y-3">
                <BackButton />
                <h2 className="text-3xl lg:text-[40px] font-bold text-base-1">
                  Kost Terbaru
                </h2>
                <p>Ditemukan 50 kost-kostan</p>
              </div>
            </div>
            <div className="grid h-full col-span-12 lg:col-span-8 md:px-4">
              <div className="flex flex-col">
                <SearchBar placeholder="Cari berdasarkan kota" />
                <div className="flex flex-col w-full h-full py-6 gap-y-6">
                  {/* Tambahan */}
                  {news.length > 0 ? (
                    <div className="flex flex-col w-full h-full py-6 gap-y-6">
                      {news.map((baru) => (
                        <RoomCard key={baru.title} />
                      ))}
                    </div>
                  ) : (
                    <div className="py-6 text-center">
                      <p>Tidak Ada Kamar</p>
                    </div>
                  )}
                  {/* Akhir Tambahan */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
