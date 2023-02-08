/* eslint-disable @next/next/no-img-element */
import FeaturedCard from "@/components/cards/FeaturedCard";
import LocationCard from "@/components/cards/LocationCard";
import TestimoniCard from "@/components/cards/TestimoniCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import SearchBar from "@/components/forms/SearchBar";
import Hero from "@/components/Hero";
import DefaultLayout from "@/layouts/DefaultLayout";
import Featured from "@/layouts/Featured";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { v4 as uuid } from "uuid";

export default function Home({ hits_room, newest_room }) {
  const router = useRouter();
  const scrollReff = useRef();
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
              {hits_room.length > 0 ? (
                hits_room.map((room) => (
                  <FeaturedCard key={uuid()} data={room} />
                ))
              ) : (
                <h1 className="col-span-12 text-center md:grid-cols-6 lg:grid-cols-3">
                  Tidak ada kost
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
            {newest_room.length > 0 ? (
              newest_room.map((room) => (
                <FeaturedCard key={uuid()} data={room} />
              ))
            ) : (
              <h1 className="col-span-12 text-center md:grid-cols-6 lg:grid-cols-3">
                Tidak ada kost
              </h1>
            )}
          </Featured>
        </Section>
        <Section>
          <Featured center title="Area Kost Populer">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
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

export async function getServerSideProps() {
  const { data: hits_room } = await roomService.search({
    params: { keyword: "kamar", label: "KOST_HITS", size: 4 },
  });
  const { data: newest_room } = await roomService.search({
    params: { keyword: "kamar", label: "KOST_TERBARU", size: 4 },
  });
  return {
    props: {
      hits_room,
      newest_room,
    },
  };
}
