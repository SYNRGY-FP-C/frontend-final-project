/* eslint-disable @next/next/no-img-element */
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";

export default function Promo() {
  return (
    <Defaultlayout title="Promo">
      <Section>
        <div className="my-4 text-5xl font-bold text-blind">Promo</div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
          <div className="grid w-full lg:col-span-3 place-items-start"></div>
          <div className="grid lg:col-span-9">
            <div className="flex flex-col w-full gap-y-3">
              <div className="grid grid-cols-1 shadow lg:grid-cols-12 rounded-xl">
                <div className="grid col-span-4">
                  <div className="flex justify-center object-cover w-full h-64 overflow-hidden">
                    <img
                      className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
                      src="/images/hero-image.jpg"
                      alt="Test"
                    />
                  </div>
                </div>
                <div className="grid col-span-8 p-5">
                  <div className="relative flex flex-col h-full gap-y-3">
                    <div className="flex flex-row justify-between">
                      <h5 className="text-2xl font-bold text-blind">
                        Kost Lorem
                      </h5>
                      <div className="flex flex-row gap-x-3">
                        <span className="inline-flex items-center px-4 text-xs text-center bg-gray-200 rounded-lg">
                          Superkost
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blind"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-x-3">
                      <div className="w-5 h-5 rounded-lg bg-blind"></div>
                      <p>Kecamatan Lorem, Bandung</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-3">
                      <span className="w-24 text-center py-0.5 border border-gray-300 text-blind rounded-lg">
                        Campur
                      </span>
                      <div className="inline-flex items-center gap-x-1">
                        <div className="w-5 h-5 rounded-lg bg-blind"></div> 5
                      </div>
                    </div>
                    <div className="flex items-stretch justify-end h-full">
                      <p className="self-end text-xl font-bold text-blind">
                        Lorem ipsum dolor / bulan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 shadow lg:grid-cols-12 rounded-xl">
                <div className="grid col-span-4">
                  <div className="flex justify-center object-cover w-full h-64 overflow-hidden">
                    <img
                      className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
                      src="/images/hero-image.jpg"
                      alt="Test"
                    />
                  </div>
                </div>
                <div className="grid col-span-8 p-5">
                  <div className="relative flex flex-col h-full gap-y-3">
                    <div className="flex flex-row justify-between">
                      <h5 className="text-2xl font-bold text-blind">
                        Kost Lorem
                      </h5>
                      <div className="flex flex-row gap-x-3">
                        <span className="inline-flex items-center px-4 text-xs text-center bg-gray-200 rounded-lg">
                          Superkost
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blind"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-x-3">
                      <div className="w-5 h-5 rounded-lg bg-blind"></div>
                      <p>Kecamatan Lorem, Bandung</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-3">
                      <span className="w-24 text-center py-0.5 border border-gray-300 text-blind rounded-lg">
                        Campur
                      </span>
                      <div className="inline-flex items-center gap-x-1">
                        <div className="w-5 h-5 rounded-lg bg-blind"></div> 5
                      </div>
                    </div>
                    <div className="flex items-stretch justify-end h-full">
                      <p className="self-end text-xl font-bold text-blind">
                        Lorem ipsum dolor / bulan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Defaultlayout>
  );
}
