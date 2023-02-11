/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import FeaturedCard from "@/components/cards/FeaturedCard";
import LocationCard from "@/components/cards/LocationCard";
import TestimoniCard from "@/components/cards/TestimoniCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import SearchBar from "@/components/forms/SearchBar";
import Hero from "@/components/Hero";
import { cities } from "@/constants/cities";
import DefaultLayout from "@/layouts/DefaultLayout";
import Featured from "@/layouts/Featured";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const router = useRouter();
  const scrollReff = useRef();
  const [responseHits, setResponseHits] = useState({
    hits_room: [],
    isLoading: true,
  });
  const [responseNew, setResponseNew] = useState({
    newest_room: [],
    isLoading: true,
  });

  const fetchDataHITS = async () => {
    setResponseHits({
      ...responseHits,
      isLoading: true,
    });
    const { data: hits_room } = await roomService.search({
      params: { label: "KOST_HITS", size: 4 },
    });
    setResponseHits({
      hits_room,
      isLoading: false,
    });
  };

  const fetchDataNew = async () => {
    setResponseNew({
      ...responseNew,
      isLoading: true,
    });
    const { data: newest_room } = await roomService.search({
      params: { label: "KOST_TERBARU", size: 4 },
    });
    setResponseNew({
      newest_room,
      isLoading: false,
    });
  };

  useEffect(() => {
    fetchDataHITS();
    fetchDataNew();
  }, []);

  return (
    <>
      <DefaultLayout title="KostHub - Cari kost dengan mudah">
        <Hero scroll={scrollReff} />
        <div className="relative flex justify-center px-4 -mt-24">
          <div className="flex flex-col w-full p-8 border shadow bg-base-9 md:w-3/5 lg:p-12 gap-y-3 rounded-xl">
            <h2 className="text-3xl font-bold leading-none lg:text-4xl">
              Sewa sekarang!
            </h2>
            <SearchBar
              placeholder="Cari nama kost, alamat, daerah atau kota"
              onClick={() => router.push("/search")}
            />
          </div>
        </div>
        <div ref={scrollReff}>
          <Section>
            <Featured
              title="Kost Hits"
              description="Kost-kostan terpopuler bulan ini!"
              href="/hits"
            >
              {responseHits.isLoading ? (
                <h1 className="col-span-12 text-center md:grid-cols-6 lg:grid-cols-3">
                  Memuat data...
                </h1>
              ) : responseHits.hits_room.length > 0 ? (
                responseHits.hits_room.map((room) => (
                  <FeaturedCard key={uuid()} data={room} />
                ))
              ) : (
                <h1 className="col-span-12 text-center md:grid-cols-6 lg:grid-cols-3">
                  Tidak ada kamar
                </h1>
              )}
            </Featured>
          </Section>
        </div>
        <Section>
          <Featured
            title="Kost Terbaru"
            description="Kost-kostan terbaru bulan ini!"
            href="/new"
          >
            {responseNew.isLoading ? (
              <h1 className="col-span-12 text-center md:grid-cols-6 lg:grid-cols-3">
                Memuat data...
              </h1>
            ) : responseNew.newest_room.length > 0 ? (
              responseNew.newest_room.map((room) => (
                <FeaturedCard key={uuid()} data={room} />
              ))
            ) : (
              <h1 className="col-span-12 text-center md:grid-cols-6 lg:grid-cols-3">
                Tidak ada kamar
              </h1>
            )}
          </Featured>
        </Section>
        <Section>
          <Featured center title="Area Kost Populer">
            {cities.map((city) => (
              <LocationCard key={uuid()} data={city} />
            ))}
          </Featured>
        </Section>
        <Section>
          <div className="flex flex-col items-center justify-center py-12 text-center gap-y-3">
            <h3 className="text-base-1 text-[40px] font-bold">
              Mengapa KostHub?
            </h3>
            <div className="grid grid-cols-1 gap-6 my-3 lg:grid-cols-3">
              <WhyUsCard image="/images/whyus1.png" title="Aman & Terpercaya">
                Sistem pencarian dan pemesanan kost yang aman dan terpercaya
                bagi kamu, pencari maupun pemilik kost!
              </WhyUsCard>
              <WhyUsCard
                image="/images/whyus2.png"
                title="Pilihan Kost yang Luas"
              >
                Mulai dari kota kecil hingga besar, kami jamin pilihan kost yang
                mampu memenuhi kebutuhanmu!
              </WhyUsCard>
              <WhyUsCard image="/images/whyus3.png" title="Mudah Digunakan">
                Semua serba mudah bersama KostHub, mulai dari cari dan sewa
                hingga promosi kost!
              </WhyUsCard>
            </div>
          </div>
        </Section>
        <Section odd>
          <div className="flex flex-col items-center justify-center py-12 text-center gap-y-3">
            <h3 className="text-white text-[40px] font-bold">
              Apa Kata Mereka?
            </h3>
            <div className="grid grid-cols-1 my-3 gap-y-6 gap-x-8 lg:grid-cols-3">
              <TestimoniCard name="Justin Bieber">
                Gampang dipake dan responsif. Ngebantu banget buat mahasiswa
                yang butuh kost dengan cepet. Makasih banyak KostHub!
              </TestimoniCard>
              <TestimoniCard name="Justin Bieber">
                Gampang dipake dan responsif. Ngebantu banget buat mahasiswa
                yang butuh kost dengan cepet. Makasih banyak KostHub!
              </TestimoniCard>
              <TestimoniCard name="Justin Bieber">
                Gampang dipake dan responsif. Ngebantu banget buat mahasiswa
                yang butuh kost dengan cepet. Makasih banyak KostHub!
              </TestimoniCard>
            </div>
          </div>
        </Section>
      </DefaultLayout>
      <Footer />
    </>
  );
}
