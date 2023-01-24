/* eslint-disable @next/next/no-img-element */
import { ROLE_USER } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";

export default function Favorite() {
  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/401">
      <Defaultlayout title="Favorit">
        <Section>
          <div className="grid grid-cols-1 gap-3 py-16 lg:py-24 lg:grid-cols-12 gap-x-12 gap-y-3">
            <div className="grid w-full lg:col-span-3 place-items-start">
              <div className="flex flex-col">
                <div className="inline-flex items-center space-x-2">
                  <span className="text-secondary-1">{"<"}</span>
                  <a className="text-secondary-1 text-[20px] font-bold">
                    Kembali
                  </a>
                </div>
                <h2 className="text-[40px] font-bold text-primary-1">
                  Favorit
                </h2>
              </div>
            </div>
            <div className="grid lg:col-span-9">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {/* Loop here
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard /> */}
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
