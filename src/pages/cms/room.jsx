import Button from "@/components/buttons/Button";
import RoomCard from "@/components/cards/RoomCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";
import { useState, useEffect } from "react";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/hero-image.jpg",
      description: "Room 1 description amet consectetur adipisicing",
      price: 1200000,
      address: "Kecamatan Lorem, Bandung",
      type: "campur",
      label: "SuperKost",
      rate: 5,
    },
    {
      id: 2,
      name: "Room 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/hero-image.jpg",
      description: "Room 1 description amet consectetur adipisicing",
      price: 1200000,
      address: "Kecamatan Lorem, Bandung",
      type: "campur",
      label: "SuperKost",
      rate: 5,
    },
  ];

  const [select, setSelect] = useState("");
  const [show, setShow] = useState([]);
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: [...rooms],
  });

  useEffect(() => {
    const data = response.data.filter((item) => item.sec === select);
    setShow(data);
  }, [select]);

  const navigateTo = () => history.push("/room");
  return (
    <DefaultLayout title="Room">
      <Section>
        <div className="pt-16 gap-y-6 pb-6">
          <div className="my-4 text-5xl font-bold text-primary-1">Rooms</div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
            <div className="grid w-full lg:col-span-3 place-items-start">
              <div className="flex flex-col w-full gap-y-3">
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("facilities")}
                >
                  Fasilitas
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("")}
                >
                  Peraturan
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("")}
                >
                  Users
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("")}
                >
                  Kost
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("room")}
                >
                  Kamar
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("")}
                >
                  Transaksi
                </Button>
              </div>
            </div>
            <div className="grid lg:col-span-9">
              <div className="grid grid-col-span-2 place-content-start gap-y-4">
                {rooms.map((room) => {
                  return <RoomCard key={room.id} data={room} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
