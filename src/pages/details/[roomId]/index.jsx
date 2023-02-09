/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/buttons/Button";
import MapCard from "@/components/cards/MapCard";
import OtherRoomCard from "@/components/cards/OtherRoomCard";
import RoomImagesCard from "@/components/cards/RoomImagesCard";
import Location from "@/components/icons/Location";
import Love from "@/components/icons/Love";
import LoveOutline from "@/components/icons/LoveOutline";
import DescriptionItem from "@/components/items/DescriptionItem";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/AuthContext";
import useFavorive from "@/hooks/useFavorite";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDescription from "@/layouts/RoomDescription";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";

export default function Details({ room }) {
  const { user } = useAuth();
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, addFavorite, removeFavorite] = useFavorive(room);

  const handleButtonRegistrasi = () => {
    if (user.verified) {
      router.push(`/details/${room.id}/submission`);
    } else {
      setOpenModal(true);
    }
  };

  return (
    <DefaultLayout title={room.name}>
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
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
          onClick={() => setOpenModal(false)}
        >
          Batal
        </Button>
      </Modal>
      <Section>
        <div className="flex flex-col gap-y-6">
          {/* BreadCrumb Navigasi */}
          <BreadCrumb />

          {/* Image Kos */}
          <RoomImagesCard roomImages={room.images} />

          {/* Tittle */}
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="inline-flex items-center gap-x-3">
              <h3 className="font-bold text-primary-1 text-3xl md:text-[40px]">
                {room.name}
              </h3>
              <p className="text-sm italic md:text-xl">{`Sisa ${room.available_room} kamar`}</p>
            </div>
          </div>

          {/* Detail Room */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="h-full col-span-12 lg:col-span-8">
              <RoomDescription room={room} />

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Deskripsi Kamar */}
              <RoomDetail title="Deskripsi">
                <p>{room.description}</p>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Fasilitas */}
              <RoomDetail title="Fasilitas & Layanan">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  {room?.facilities?.map((facility) => (
                    <DescriptionItem name={facility.name} key={facility.id}>
                      {facility.name}
                    </DescriptionItem>
                  ))}
                </div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Aturan Kos */}
              <RoomDetail title="Aturan Kost">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  {room?.rules?.map((rule) => (
                    <DescriptionItem name={rule.name} key={rule.id}>
                      {rule.name}
                    </DescriptionItem>
                  ))}
                </div>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Tipe Kamar Lain*/}
              <RoomDetail title="Tipe Kamar Lain dari Pemilik Kost Ini">
                <div className="flex gap-x-3">
                  {room?.another_room?.map((value, index) => (
                    <OtherRoomCard key={index} room={value} />
                  ))}
                </div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Lokasi */}
              <RoomDetail title="Lokasi">
                <div className="flex flex-col gap-y-3">
                  <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row">
                    <Location className="w-5 h-5 mr-1" />
                    <p>{room?.address}</p>
                  </div>
                  <MapCard />
                </div>
              </RoomDetail>

              {/* <hr className="h-0.5 bg-gray-200 border-0 my-8" /> */}

              {/* Ulasan */}
              {/* <RoomDetail title="Ulasan">
                <div className="flex flex-col gap-y-3"></div>
              </RoomDetail> */}

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
                      <button className="inline-flex items-center gap-2">
                        <FiShare2 className="w-5 h-5" />
                        <p>Sebarkan</p>
                      </button>
                    </div>
                    <div className="inline-flex items-center gap-x-2 ml-8">
                      {isFavorite ? (
                        <button
                          className="inline-flex items-center gap-2"
                          onClick={() => removeFavorite(room)}
                        >
                          <Love className="w-5 h-5" />
                          <p>Simpan</p>
                        </button>
                      ) : (
                        <button
                          className="inline-flex items-center gap-2"
                          onClick={() => addFavorite(room)}
                        >
                          <LoveOutline className="w-5 h-5" color="dark" />
                          <p>Simpan</p>
                        </button>
                      )}
                    </div>
                  </div>
                  {/* Label */}
                  <div className="block lg:mt-8">
                    <span className="inline-flex items-center px-4 py-1 text-xs text-center border border-black rounded-full">
                      {room?.type}
                    </span>
                  </div>
                  {/* title room panel */}
                  <div className="inline-block items-center gap-x-3">
                    <h3 className="font-bold text-primary-1 text-3xl md:text-[24px]">
                      {room?.name}
                    </h3>
                    <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row pt-3">
                      <Location className="w-5 h-5 mr-1" />
                      <p className="text-[15px]">
                        {`${room?.district}, ${room?.city}`}
                      </p>
                    </div>
                  </div>
                  <hr className="h-0.5 bg-gray-400 border-0" />
                  {/* Harga Kamar */}
                  <p className="text-primary-1 mt-5">Mulai dari</p>
                  <p className="text-secondary-1 mb-2">
                    {" "}
                    <span className="text-2xl font-semibold  text-secondary-1">
                      {formatRupiah(room?.price)}
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

export const getServerSideProps = async (contex) => {
  const { data } = await roomService.get(contex.query.roomId);
  return {
    props: {
      room: data,
    },
  };
};
