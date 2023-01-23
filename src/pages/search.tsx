/* eslint-disable @next/next/no-img-element */
import RoomCard from "@/components/cards/RoomCard";
import Checkbox from "@/components/forms/Checkbox";
import Input from "@/components/forms/Input";
import SearchBar from "@/components/forms/SearchBar";
import Star from "@/components/icons/Star";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";

export default function Search() {
  return (
    <DefaultLayout title="Cari kost impianmu">
      <Section>
        <div className="flex flex-col pt-24 pb-4 gap-y-4">
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <h2 className="font-bold text-2xl lg:text-[40px] text-base-100">
              Hasil pencarian: Bandung, Jawa Barat
            </h2>
            <p className="text-base-100">Ditemukan 50 kost-kostan</p>
          </div>
          <div className="grid h-full grid-cols-12">
            <div className="hidden col-span-4 lg:grid">
              <div className="relative">
                <div className="flex flex-col w-full border border-gray-200 shadow p-7 rounded-xl gap-y-6">
                  <h5 className="text-xl font-bold text-base-100">
                    Filter Pencarianmu
                  </h5>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">Label</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Kost Hits</Checkbox>
                      <Checkbox>SuperKost</Checkbox>
                      <Checkbox>Kost Terbaru</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">Tipe</h5>
                    <div className="flex flex-row gap-x-2">
                      <span className="w-24 text-center py-0.5 border border-gray-300 text-base-200 rounded-lg">
                        Campur
                      </span>
                      <span className="w-24 text-center py-0.5 border border-gray-300 text-base-200 rounded-lg">
                        Pria
                      </span>
                      <span className="w-24 text-center py-0.5 border border-gray-300 text-base-200 rounded-lg">
                        Wanita
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">Rentang Harga</h5>
                    <div className="flex flex-col gap-y-3">
                      <Input type="text" placeholder="Harga Minimum" />
                      <Input type="text" placeholder="Harga Maksimum" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">Rating</h5>
                    <div className="flex flex-col gap-y-3">
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>Tidak ada rating</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">Promo</h5>
                    <div className="flex flex-col gap-y-3">
                      <Checkbox>Diskon 25%</Checkbox>
                      <Checkbox>Diskon 50%</Checkbox>
                      <Checkbox>Super Deals</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">Fasilitas</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Kamar Mandi Dalam</Checkbox>
                      <Checkbox>Air Panas</Checkbox>
                      <Checkbox>AC</Checkbox>
                      <Checkbox>Kamar Mandi Luar</Checkbox>
                      <Checkbox>Lemari</Checkbox>
                      <Checkbox>Kursi</Checkbox>
                      <Checkbox>Meja</Checkbox>
                      <Checkbox>Kloset Duduk</Checkbox>
                      <Checkbox>Kasur</Checkbox>
                      <Checkbox>Televisi</Checkbox>
                      <Checkbox>Jendela</Checkbox>
                      <Checkbox>Kipas Angin</Checkbox>
                      <Checkbox>Listrik</Checkbox>
                      <Checkbox>Laundry</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">
                      Skema Pembayaran
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Harian</Checkbox>
                      <Checkbox>Mingguan</Checkbox>
                      <Checkbox>Bulan</Checkbox>
                      <Checkbox>Per 3 bulan</Checkbox>
                      <Checkbox>Per 6 bulan</Checkbox>
                      <Checkbox>Per 12 bulan</Checkbox>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between gap-x-3">
                    <button className="w-full py-3 text-white rounded-lg bg-primary-1">
                      Filter
                    </button>
                    <button className="w-full py-3 border rounded-lg bg-base-900 text-primary-1 border-primary-1">
                      Reset
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-100">Bandingkan Kost</h5>
                    <div className="flex flex-col gap-y-3">
                      <Input type="text" placeholder="Kost 1" />
                      <Input type="text" placeholder="Kost 2" />
                      <button className="py-3 text-white rounded-lg bg-primary-1 w-44">
                        Bandingkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid h-full col-span-12 lg:col-span-8 md:px-4">
              <div className="flex flex-col">
                <SearchBar placeholder="Cari nama kost, alamat, daerah atau kota" />
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
