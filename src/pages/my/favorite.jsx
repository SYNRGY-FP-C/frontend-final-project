/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/buttons/BackButton";
import FeaturedCard from "@/components/cards/FeaturedCard";
import { ROLE_USER } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React, { useEffect, useState } from "react";

export default function Favorite() {
  const [favorites, setfavorites] = useState([]);

  useEffect(() => {
    const tempFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (tempFavorites.length > 0) {
      setfavorites(tempFavorites);
    }
  }, []);

  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/403">
      <Defaultlayout title="Favorit">
        <Section>
          <div className="flex flex-col py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12 gap-y-3">
              <div className="grid w-full lg:col-span-3 place-items-start">
                <div className="flex flex-col">
                  <BackButton />
                  <h2 className="text-[40px] font-bold text-primary-1">
                    Favorit
                  </h2>
                </div>
              </div>
              <div className="grid lg:col-span-9">
                {favorites.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {favorites.map((favorite) => (
                      <FeaturedCard key={favorite.title} favorite={favorite} />
                    ))}
                  </div>
                ) : (
                  <div className="py-6 text-center">
                    <p>Tidak Ada Kamar</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
