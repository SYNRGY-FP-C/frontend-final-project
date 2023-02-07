/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/buttons/Button";
import MapCard from "@/components/cards/MapCard";
import OtherRoomCard from "@/components/cards/OtherRoomCard";
import RoomImagesCard from "@/components/cards/RoomImagesCard";
import Location from "@/components/icons/Location";
import DescriptionItem from "@/components/items/DescriptionItem";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDescription from "@/layouts/RoomDescription";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";

const mockDataRoom = {
  id: 1,
  name: "Kamar Medium Kost Lorem",
  type: "Medium",
  rating: "4.8",
  label: "Superkost",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, dolor vitae vestibulum varius, sem nisi malesuada tellus, at tempor nibh augue at massa. Aliquam non sem ante. Donec hendrerit orci nec dapibus accumsan. In sollicitudin quis arcu non elementum. Sed congue felis at aliquam pulvinar. Vivamus eu justo vel enim blandit faucibus non mattis sapien. Suspendisse potenti. Aliquam at neque eu mi laoreet aliquet et et erat.",
  max_person: 3,
  price: 1200000,
  images: {
    kost: [
      {
        id: 1,
        url: "image_kost1.png",
      },
      {
        id: 2,
        url: "image_kost2.png",
      },
    ],
    room: [
      {
        id: 1,
        url: "image_room1.png",
      },
      {
        id: 2,
        url: "image_room2.png",
      },
    ],
  },
  facilities: [
    {
      id: 1,
      name: "Kamar Mandi",
    },
    {
      id: 2,
      name: "Kasur",
    },
    {
      id: 3,
      name: "Kipas",
    },
    {
      id: 4,
      name: "Jendela",
    },
    {
      id: 5,
      name: "Meja",
    },
  ],
  rules: [
    {
      id: 1,
      name: "Tamu boleh menginap",
    },
    {
      id: 2,
      name: "Tipe ini bisa diisi maks. 2 orang/ kamar",
    },
    {
      id: 3,
      name: "Tidak untuk pasutri",
    },
    {
      id: 4,
      name: "Tamu menginap dikenakan biaya",
    },
    {
      id: 5,
      name: "Kriteria umum",
    },
  ],
  another_room: [
    {
      id: 1,
      name: "Kamar Large Kost Lorem",
      price: 1700000,
      thumbnail: "thumbnail_other_room.png",
      label: "superkost",
      type: "campur",
      location: {
        city: "Bandung",
        district: "Kec. Lorem",
      },
      rating: "4.5",
    },
    {
      id: 2,
      name: "Kamar Large Kost Lorem",
      price: 1700000,
      thumbnail: "image_room1.png",
      location: {
        city: "Bandung",
        district: "Kec. Lorem",
      },
      rating: "4.5",
    },
  ],
  location: {
    long: "string",
    lat: "string",
    address: "Jl. Lorem ipsum dolor sit amet No. 2",
    province: "Jawa Barat",
    city: "Bandung",
    district: "Kec. Lorem",
    note: "40276",
  },
};

export default function Details() {
  const isVerified = true;

  const router = useRouter();
  const [room, setRoom] = useState(mockDataRoom);
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchRoom = async () => {
      setResponse({ isLoading: true, isError: false, message: "" });
      try {
        const response = await roomService.get();
        setRoom(response.room);
        setResponse({
          isLoading: false,
          isError: false,
          message: "Berhasil Get Data Room",
        });
      } catch (err) {
        setResponse({
          isLoading: false,
          isError: true,
          message: `${err}, Gagal Get Data Room`,
        });
      }
    };
    fetchRoom();
  }, []);

  if (response.isLoading) return <LoadingScreen />;

  const handleButtonRegistrasi = () => {
    if (isVerified) {
      router.push(`/details/${room.id}/submission`);
    } else {
      setOpen(true);
    }
  };

  return (
    <DefaultLayout title="Kos itu">
      <Modal isOpen={open} setIsOpen={setOpen}>
        <img
          src="/images/checking_verify_profile.png"
          alt="Cancel"
          className="w-24 h-24"
        />
        <p className="text-xl text-center text-primary-1">
          Anda harus melengkapi profil untuk melanjutkan registrasi
        </p>
        <Link href="/my/history" className="w-full">
          <Button>Lengkapi profil</Button>
        </Link>
        <Button
          className="inline-flex justify-center w-full px-4 py-3 bg-base-900 border rounded-lg text-primary-1 border-primary-1"
          onClick={() => setOpen(false)}
        >
          Batal
        </Button>
      </Modal>
      <Section>
        <div className="flex flex-col gap-y-6">
          {/* BreadCrumb Navigasi */}
          <BreadCrumb />

          {/* Image Kos */}
          <RoomImagesCard />

          {/* Tittle */}
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="inline-flex items-center gap-x-3">
              <h3 className="font-bold text-primary-1 text-3xl md:text-[40px]">
                {room.name}
              </h3>
              <p className="text-sm italic md:text-xl">Sisa 1 kamar</p>
            </div>
          </div>

          {/* Detail Room */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="h-full col-span-12 lg:col-span-8">
              <RoomDescription />

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Deskripsi Kamar */}
              <RoomDetail title="Deskripsi">
                <p>{room.description}</p>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Fasilitas */}
              <RoomDetail title="Fasilitas & Layanan">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  {room.facilities.map((facility) => (
                    <DescriptionItem name={facility.name} key={facility.id}>
                      {facility.name}
                    </DescriptionItem>
                  ))}
                </div>
                <p className="underline decoration-primary-1-200 decoration-2">
                  Lihat semua
                </p>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Aturan Kos */}
              <RoomDetail title="Aturan Kost">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  {room.rules.map((rule) => (
                    <DescriptionItem name={rule.name} key={rule.id}>
                      {rule.name}
                    </DescriptionItem>
                  ))}
                </div>
                <p className="underline decoration-primary-1-200 decoration-2">
                  Lihat semua
                </p>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Tipe Kamar Lain*/}
              <RoomDetail title="Tipe Kamar Lain dari Pemilik Kost Ini">
                <div className="flex gap-x-3">
                  {room.another_room.map((other) => (
                    <OtherRoomCard
                      key={other.id}
                      name={other.name}
                      price={other.price}
                      thumbnail={other.thumbnail}
                      city={other.location.city}
                      district={other.location.district}
                      label={other.label}
                      rating={other.rating}
                      type={other.type}
                    />
                  ))}
                </div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Lokasi */}
              <RoomDetail title="Lokasi">
                <div className="flex flex-col gap-y-3">
                  <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row">
                    <Location className="w-5 h-5 mr-1" />
                    <p>
                      {`${room.location.address} ${room.location.district} ${room.location.city} ${room.location.note}`}
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
                <div className="flex flex-col md:items-center md:flex-row md:justify-between gap-y-4 mb-8">
                  <div className="flex flex-row">
                    <div className="flex justify-center object-cover w-32 h-32 overflow-hidden">
                      <img
                        className="object-cover w-full rounded-full"
                        src="/images/hero-image.jpg"
                        alt="Test"
                      />
                    </div>
                    <div className="flex flex-col justify-center ml-4">
                      <h3 className="text-xl font-medium text-primary-1">
                        Lorem Ipsum
                      </h3>
                      <p className="text-primary-1">
                        Bergabung pada September 2020
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-36 gap-y-3 text-center text-white bg-primary-1 rounded-lg">
                    <button className="inline-flex items-center px-4 py-3 rounded-lg text-primary-1 bg-primary-1-200 gap-x-3">
                      <BsTelephone className="w-5 h-5 text-white" />
                      <p className="text-white">Hubungi</p>
                    </button>
                  </div>
                </div>
              </RoomDetail>
            </div>

            {/* Panel Form Penyewaan */}
            <div className="col-span-12 lg:col-span-4">
              <div className="relative w-full">
                <div className="flex flex-col p-8 rounded-lg shadow gap-y-4">
                  {/* Icon Save To Wishlisht*/}

                  <div className="inline-flex items-center gap-x-6">
                    <div className="inline-flex items-center gap-x-2">
                      <button>
                        <FiShare2 className="w-5 h-5" />
                      </button>
                      Sebarkan
                    </div>
                    <div className="inline-flex items-center gap-x-2 ml-8">
                      <button>
                        <AiOutlineHeart className="w-5 h-5" />
                      </button>
                      Simpan
                    </div>
                  </div>
                  {/* Label */}
                  <div className="block">
                    <span className="inline-flex items-center h-7 px-4 py-1 text-xs text-center text-white bg-primary-3 rounded-full">
                      Superkost
                    </span>
                  </div>
                  {/* title room panel */}
                  <div className="inline-block items-center gap-x-3">
                    <h3 className="font-bold text-primary-1 text-3xl md:text-[24px]">
                      Kamar Medium Kost Lorem
                    </h3>
                    <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row pt-3">
                      <Location className="w-5 h-5 mr-1" />
                      <p className="text-[15px]">
                        {`${room.location.district}, ${room.location.city}`}
                      </p>
                    </div>
                  </div>
                  <hr className="h-0.5 bg-gray-400 border-0" />
                  {/* Harga Kamar */}
                  <p className="text-primary-1 mt-5">Mulai dari</p>
                  <p className="text-secondary-1 mb-2">
                    {" "}
                    <span className="text-2xl font-semibold  text-secondary-1">
                      {formatRupiah(room.price)}
                    </span>{" "}
                    / bulan
                  </p>
                  {/* Button Registrasi */}
                  <button
                    className="px-4 py-3 w-full text-white rounded-lg bg-primary-1 hover:bg-sky-700"
                    onClick={() => handleButtonRegistrasi()}
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
