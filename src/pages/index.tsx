import FeaturedCard from "@/components/cards/FeaturedCard";
import LocationCard from "@/components/cards/LocationCard";
import TestimoniCard from "@/components/cards/TestimoniCard";
import SearchBar from "@/components/forms/SearchBar";
import Hero from "@/components/Hero";
import DefaultLayout from "@/layouts/DefaultLayout";
import Featured from "@/layouts/Featured";
import Section from "@/layouts/Section";
import React, { useRef } from "react";

export default function Home() {
  const scrollReff = useRef();
  return (
    <DefaultLayout title="KostHub - Cari kost dengan mudah">
      <Hero scroll={scrollReff} />
      <div className="relative flex justify-center px-4 -mt-24">
        <div className="flex flex-col w-full p-8 bg-white border shadow md:w-3/5 lg:p-12 gap-y-3 rounded-xl">
          <h2 className="text-3xl font-bold leading-none lg:text-4xl">
            Sewa sekarang!
          </h2>
          <SearchBar placeholder="Cari nama kost, alamat, daerah atau kota" />
        </div>
      </div>
      <Section>
        <Featured>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </Featured>
      </Section>
      <Section>
        <Featured>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </Featured>
      </Section>
      <div ref={scrollReff}></div>
      <Section>
        <Featured center>
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
      <Section odd>
        <Featured center three>
          <TestimoniCard />
          <TestimoniCard />
          <TestimoniCard />
        </Featured>
      </Section>
    </DefaultLayout>
  );
}
