/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import MapCard from "@/components/cards/MapCard";
import OtherRoomCard from "@/components/cards/OtherRoomCard";
import RoomImagesCard from "@/components/cards/RoomImagesCard";
import Checkbox from "@/components/forms/Checkbox";
import InputSchemePaymenByTime from "@/components/forms/InputSchemePaymenByTime"
import InputWithLabel from "@/components/forms/InputWithLabel";
import DescriptionItem from "@/components/items/DescriptionItem";
import Modal from "@/components/Modal";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDescription from "@/layouts/RoomDescription";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import {useRouter} from "next/router"
import React, {useState} from "react";

export default function Details() {
  const rooms = {
    name : "cakra 1",
    price : 1000
  }
  const itemChecked = [
    {
      item: "kursi",
      price: 100
    },
    {
      item: "meja",
      price: 100
    },
    {
      item: "kipas",
      price: 100
    },
    {
      item: "lemari",
      price: 100
    },
    {
      item: "kasur",
      price: 100
    },
    {
      item: "laundry",
      price: 100
    },
  ]
  const router = useRouter();
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [timeRent, setTimeRent] = useState('');
  const [checkedOrder, setCheckedOrder] = useState(
    new Array(itemChecked.length).fill(false)
  );
  const [totalExtra, setTotalExtra] = useState(0)
  const [totalCost, setTotalCost] = useState(0);

  const handleDate = (e) => {
    const value = e.target.value
        setDate(value)
  } 

  const handleTimeRent = (e) => {
    const value = e.target.value
    setTimeRent(value)
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedOrder.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedOrder(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + itemChecked[index].price;
        }
        return sum;
      },
      0
    );

    setTotalExtra(totalPrice);
    setTotalCost(rooms.price + totalPrice);
  };

  const handleSubmitRegistrasi = (e) => {
    e.preventDefault();

    if (!date) {
      return false;
    } else if (!timeRent) {
      return false;
    } else {
      router.push(
        `/details/1/submission?date=${date}&payment_scheme=${timeRent}`
      );
    }
  };


  return (
    <DefaultLayout title="Kos itu">
      <Modal />
      <Section>
        <div className="flex flex-col gap-y-6">

          {/* BreadCrumb Navigasi */}
          <BreadCrumb />

          {/* Image Kos */}
          <RoomImagesCard />

          {/* Tittle */}
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="inline-flex items-center gap-x-3">
              <h3 className="font-bold text-blind text-3xl md:text-[40px]">
                {rooms.name}
              </h3>
              <p className="text-sm italic md:text-xl">Sisa 1 kamar</p>
            </div>
            <div className="inline-flex items-center gap-x-6">
              <div className="inline-flex items-center gap-x-2">
                {/* Icon Share */}
                <div className="w-5 h-5 rounded-lg bg-blind-200"></div>
                Sebarkan
              </div>
              <div className="inline-flex items-center gap-x-2">
                {/* Icon Save To Wishlisht*/}
                <div className="w-5 h-5 rounded-lg bg-blind-200"></div>
                Simpan
              </div>
            </div>
          </div>

          {/* Detail Room */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="h-full col-span-12 lg:col-span-8">
              <RoomDescription />

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Fasilitas */}
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

              {/* Aturan Kos */}
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

              {/* Tipe Kamar */}
              <RoomDetail title="Tipe Kamar Lain dari Pemilik Kost Ini">
                <div className="flex gap-x-3">
                  <OtherRoomCard />
                </div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Lokasi */}
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

              {/* Ulasan */}
              <RoomDetail title="Ulasan">
                <div className="flex flex-col gap-y-3"></div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Kontak Pemiliki Kos */}
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

            {/* Panel Form Penyewaan */}
            <div className="col-span-12 lg:col-span-4">
              <div className="relative w-full">
                <div className="flex flex-col p-8 rounded-lg shadow gap-y-4">

                  {/* Harga Kamar */}
                  <p className="text-blind">Mulai dari</p>
                  <p className="text-blind">
                    {" "}
                    <span className="text-2xl font-semibold">
                      Rp. {rooms.price}
                    </span>{" "}
                    / bulan
                  </p>

                  {/* Input Tanggal */}
                  <InputWithLabel
                    labelName="Tanggal mulai sewa"
                    type="date"
                    placeholder="Tanggal Sewa"
                    required
                    value={date}

                    onChange={(e)=> handleDate(e)}
                  />

                  {/* Input Pembayaran */}
                   <InputSchemePaymenByTime

                    labelName="Skema Pembayaran"
                    placeholder="Per Bulan"
                    required
                    value={timeRent}
                    onChange={(e)=> handleTimeRent(e)}
                  />

                  {/* CheckBox Tambahan fasilitas */}
                  <div className="flex flex-col gap-y-2">
                    <p className="block text-lg text-blind">
                      Tambahan Layanan & Fasilitas
                    </p>
                    <div className="grid grid-cols-2 mb-8 gap-y-3">
                      {itemChecked.map(({ item, price }, index) => (
                        <Checkbox
                          name={item}
                          key={index}
                          value={price}
                          onChange={() => handleOnChange(index)}
                        >
                          {item}
                        </Checkbox>
                      ))}
                    </div>
                  </div>

                  {/* Harga Kamar */}
                  <div className="inline-flex justify-between">
                    <p>Biaya Kamar</p>
                    <p>Rp. {rooms.price}</p>
                  </div>

                  {/* Harga Tambahan dari Checkbox tambahan fasilitas */}
                  <div className="inline-flex justify-between">
                    <p>Tambahan</p>
                    <p>Rp. {totalExtra}</p>
                  </div>

                  <hr className="h-0.5 bg-gray-200 border-0" />

                  {/* Total Pembayaran */}
                  <div className="inline-flex justify-between">
                    <p className="font-bold text-blind">Total Biaya</p>
                    <p className="font-bold text-blind">Rp. {totalCost}</p>
                  </div>

                  {/* Button Submit */}
                  <button
                    className="px-4 py-3 text-white rounded-lg bg-blind hover:bg-sky-700"
                    onClick={(e) => handleSubmitRegistrasi(e)}
                  >
                    Registrasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
