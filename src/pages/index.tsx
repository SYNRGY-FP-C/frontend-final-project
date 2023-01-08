import FeaturedCard from "@/components/cards/FeaturedCard";
import LocationCard from "@/components/cards/LocationCard";
import TestimoniCard from "@/components/cards/TestimoniCard";
import SearchBar from "@/components/forms/SearchBar";
import Hero from "@/components/Hero";
import DefaultLayout from "@/layouts/DefaultLayout";
import Featured from "@/layouts/Featured";
import Section from "@/layouts/Section";
import React from "react";

export default function Home() {
  return (
    <DefaultLayout title="KostHub - Cari kost dengan mudah">
      <Section>
        <Hero />
        <SearchBar />
      </Section>
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
