/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import MapCard from "@/components/cards/MapCard";
import OtherRoomCard from "@/components/cards/OtherRoomCard";
import RoomImagesCard from "@/components/cards/RoomImagesCard";
import Checkbox from "@/components/forms/Checkbox";
import InputWithLabel from "@/components/forms/InputWithLabel";
import DescriptionItem from "@/components/items/DescriptionItem";
import Modal from "@/components/Modal";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDescription from "@/layouts/RoomDescription";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import Link from "next/link";
import React from "react";

export default function Details() {
  return (
    <DefaultLayout title="Kos itu">
      <Modal />
      <Section>
        <div className="flex flex-col gap-y-6">
          <BreadCrumb />
          <RoomImagesCard />
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="inline-flex items-center gap-x-3">
              <h3 className="font-bold text-blind text-3xl md:text-[40px]">
                Kost Lorem
              </h3>
              <p className="text-sm italic md:text-xl">Sisa 1 kamar</p>
            </div>
            <div className="inline-flex items-center gap-x-6">
              <div className="inline-flex items-center gap-x-2">
                {/* Icon */}
                <div className="w-5 h-5 rounded-lg bg-blind-200"></div>
                Sebarkan
              </div>
              <div className="inline-flex items-center gap-x-2">
                {/* Icon */}
                <div className="w-5 h-5 rounded-lg bg-blind-200"></div>
                Simpan
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="h-full col-span-12 lg:col-span-8">
              <RoomDescription />
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              <RoomDetail title="Fasilitas & Layanan">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                </div>
                <p className="underline decoration-blind-200 decoration-2">
                  Lihat semua
                </p>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              <RoomDetail title="Aturan Kost">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                </div>
                <p className="underline decoration-blind-200 decoration-2">
                  Lihat semua
                </p>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              <RoomDetail title="Tipe Kamar Lain dari Pemilik Kost Ini">
                <div className="flex gap-x-3">
                  <OtherRoomCard />
                </div>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              <RoomDetail title="Lokasi">
                <div className="flex flex-col gap-y-3">
                  <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row">
                    <div className="w-5 h-5 rounded-lg bg-blind-200"></div>
                    <p>
                      Jl. Lorem ipsum dolor sit amet No. 2, Kec. Lorem, Kel.
                      Ipsum, Kota Bandung, Jawa Barat, 40276
                    </p>
                  </div>
                  <MapCard />
                </div>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              <RoomDetail title="Ulasan">
                <div className="flex flex-col gap-y-3"></div>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              <RoomDetail title="Kontak Pemilik Kos">
                <div className="flex flex-col md:items-center md:flex-row md:justify-between gap-y-4">
                  <div className="flex flex-row">
                    <div className="flex justify-center object-cover w-32 h-32 overflow-hidden">
                      <img
                        className="object-cover w-full rounded-xl"
                        src="/images/hero-image.jpg"
                        alt="Test"
                      />
                    </div>
                    <div className="flex flex-col justify-center ml-4">
                      <h3 className="text-xl font-medium text-blind">
                        Lorem Ipsum
                      </h3>
                      <p className="text-blind">
                        Bergabung pada September 2020
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-56 gap-y-3">
                    <button className="inline-flex items-center px-4 py-3 rounded-lg text-blind bg-blind-200 gap-x-3">
                      <div className="w-5 h-5 rounded-lg bg-blind"></div>
                      <p> Hubungi pemilik</p>
                    </button>
                    <button className="inline-flex items-center px-4 py-3 rounded-lg text-blind bg-blind-200 gap-x-3">
                      <div className="w-5 h-5 rounded-lg bg-blind"></div>
                      <p>Jadwalkan survey</p>
                    </button>
                  </div>
                </div>
              </RoomDetail>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="relative w-full">
                <div className="flex flex-col p-8 rounded-lg shadow gap-y-4">
                  <p className="text-blind">Mulai dari</p>
                  <p className="text-blind">
                    {" "}
                    <span className="text-2xl font-semibold">
                      Rp2.222.222
                    </span>{" "}
                    / bulan
                  </p>
                  <InputWithLabel
                    labelName="Tanggal mulai sewa"
                    type="date"
                    placeholder="Tanggal Sewa"
                  />
                  <InputWithLabel
                    labelName="Skema Pembayaran"
                    type="text"
                    placeholder="Pembayaran"
                  />
                  <div className="flex flex-col gap-y-2">
                    <p className="block text-lg text-blind">
                      Tambahan Layanan & Fasilitas
                    </p>
                    <div className="grid grid-cols-2 mb-8 gap-y-3">
                      <Checkbox>Kasur</Checkbox>
                      <Checkbox>Kursi</Checkbox>
                      <Checkbox>Meja</Checkbox>
                      <Checkbox>Laundry</Checkbox>
                      <Checkbox>Kipas Angin</Checkbox>
                      <Checkbox>lemari</Checkbox>
                    </div>
                  </div>
                  <div className="inline-flex justify-between">
                    <p>Biaya Kamar</p>
                    <p>Rp2.222.222</p>
                  </div>
                  <div className="inline-flex justify-between">
                    <p>Tambahan</p>
                    <p>Rp0</p>
                  </div>
                  <hr className="h-0.5 bg-gray-200 border-0" />
                  <div className="inline-flex justify-between">
                    <p className="font-bold text-blind">Total Biaya</p>
                    <p className="font-bold text-blind">Rp2.222.222</p>
                  </div>
                  <Link
                    href="/details/1/submission"
                    className="px-4 py-3 text-center text-white rounded-lg bg-blind"
                  >
                    Registrasi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
