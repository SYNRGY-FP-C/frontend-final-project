/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/buttons/Button";
import OtherRoomCard from "@/components/cards/OtherRoomCard";
import RoomImagesCard from "@/components/cards/RoomImagesCard";
import Location from "@/components/icons/Location";
import Love from "@/components/icons/Love";
import LoveOutline from "@/components/icons/LoveOutline";
import DescriptionItem from "@/components/items/DescriptionItem";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDescription from "@/layouts/RoomDescription";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import { addFavorite, removeFavorite } from "@/utils/bookmark";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";

export default function Details() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [responseRoom, setResponseRoom] = useState({
    isLoading: false,
    room: null,
  });
  const [responseOwner, setResponseOwner] = useState({
    isLoading: false,
    owner: null,
  });
  const [openModal, setOpenModal] = useState(false);

  const fetchRoomData = async () => {
    setResponseRoom({ ...responseRoom, isLoading: true });
    try {
      const { data } = await roomService.get(router?.query?.roomId);
      if (!data) router.push("/404");
      setResponseRoom({ isLoading: false, room: data });
      setIsLoading(false);
    } catch (error) {
      router.push("/404");
    }
  };

  const fetchOwnerData = async () => {
    setResponseOwner({ ...responseOwner, isLoading: true });
    const { data } = await roomService.getOwner(router?.query?.roomId);
    if (!data) router.push("/404");
    setResponseOwner({ isLoading: false, owner: data });
  };

  useEffect(() => {
    if (router?.query?.roomId) {
      fetchRoomData();
      fetchOwnerData();
    }
  }, [router.isReady]);

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (isLoading) return;
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((favorite) => favorite.id === responseRoom?.room?.id)) {
      setIsFavorite(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isFavorite]);

  if (isLoading) return <LoadingScreen />;

  return (
    <DefaultLayout title={responseRoom?.room?.name}>
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
          className="inline-flex justify-center w-full px-4 py-3 border rounded-lg bg-base-900 text-primary-1 border-primary-1"
          onClick={() => setOpenModal(false)}
        >
          Batal
        </Button>
      </Modal>
      <Section>
        <div className="flex flex-col py-6 gap-y-6">
          {/* BreadCrumb Navigasi */}
          <BreadCrumb title={responseRoom?.room?.name} />

          {/* Image Kos */}
          <RoomImagesCard roomImages={responseRoom?.room?.images} />

          {/* Tittle */}
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="inline-flex items-center gap-x-3">
              <h3 className="font-bold text-primary-1 text-3xl md:text-[40px]">
                {responseRoom?.room?.name}
              </h3>
              <p className="text-sm italic md:text-xl">{`Sisa ${responseRoom?.room?.available_room} kamar`}</p>
            </div>
          </div>

          {/* Detail Room */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="h-full col-span-12 lg:col-span-8">
              <RoomDescription room={responseRoom?.room} />

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Deskripsi Kamar */}
              <RoomDetail title="Deskripsi">
                <p>{responseRoom?.room?.description}</p>
              </RoomDetail>

              {/* Fasilitas */}
              {responseRoom?.room?.facilities?.length > 0 && (
                <>
                  <hr className="h-0.5 bg-gray-200 border-0 my-8" />
                  <RoomDetail title="Fasilitas & Layanan">
                    <div className="grid grid-cols-2 mb-8 gap-y-4">
                      {responseRoom.room?.facilities?.map((facility) => (
                        <DescriptionItem name={facility.name} key={facility.id}>
                          {facility.name}
                        </DescriptionItem>
                      ))}
                    </div>
                  </RoomDetail>
                </>
              )}

              {/* Aturan Kos */}
              {responseRoom?.room?.rules?.length > 0 && (
                <>
                  <hr className="h-0.5 bg-gray-200 border-0 my-8" />
                  <RoomDetail title="Aturan Kost">
                    <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-y-4">
                      {responseRoom?.room?.rules?.map((rule) => (
                        <DescriptionItem name={rule.name} key={rule.id}>
                          {rule.name}
                        </DescriptionItem>
                      ))}
                    </div>
                  </RoomDetail>
                </>
              )}

              {/* Tipe Kamar Lain*/}
              {responseRoom?.room?.another_room?.length > 0 && (
                <>
                  <hr className="h-0.5 bg-gray-200 border-0 my-8" />
                  <RoomDetail title="Tipe Kamar Lain dari Pemilik Kost Ini">
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                      {responseRoom?.room?.another_room?.map((value, index) => (
                        <OtherRoomCard key={index} room={value} />
                      ))}
                    </div>
                  </RoomDetail>
                </>
              )}

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Lokasi */}
              <RoomDetail title="Lokasi">
                <div className="flex flex-col gap-y-3">
                  <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row">
                    <Location className="w-5 h-5 mr-1" />
                    <p>{responseRoom?.room?.address}</p>
                  </div>
                  {/* <MapCard /> */}
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
                <div className="flex flex-col mb-8 md:items-center md:flex-row md:justify-between gap-y-4">
                  <div className="flex flex-row">
                    <div className="flex justify-center object-cover w-32 h-32 overflow-hidden">
                      <img
                        className="object-cover w-full rounded-full"
                        src="/images/Kosthub.png"
                        alt={responseOwner?.owner?.name}
                      />
                    </div>
                    <div className="flex flex-col justify-center ml-4">
                      <h3 className="text-xl font-medium text-primary-1">
                        {responseOwner?.owner?.name}
                      </h3>
                      <p className="text-primary-1">
                        Bergabung pada{" "}
                        {new Date(
                          responseOwner?.owner?.created_at
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-center text-white rounded-lg w-36 gap-y-3 bg-primary-1">
                    <a
                      href={`https://wa.me/${responseOwner?.owner?.phone}`}
                      className="inline-flex items-center px-4 py-3 rounded-lg text-primary-1 bg-primary-1-200 gap-x-3"
                    >
                      <BsTelephone className="w-5 h-5 text-white" />
                      <p className="text-white">Hubungi</p>
                    </a>
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
                    <div className="inline-flex items-center ml-8 gap-x-2">
                      {isFavorite ? (
                        <button
                          className="inline-flex items-center gap-2"
                          onClick={() => {
                            removeFavorite(responseRoom?.room);
                            setIsFavorite(false);
                          }}
                        >
                          <Love className="w-5 h-5" />
                          <p>Favorit</p>
                        </button>
                      ) : (
                        <button
                          className="inline-flex items-center gap-2"
                          onClick={() => {
                            addFavorite(responseRoom?.room);
                            setIsFavorite(true);
                          }}
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
                      {responseRoom?.room?.type}
                    </span>
                  </div>
                  {/* title room panel */}
                  <div className="items-center inline-block gap-x-3">
                    <h3 className="font-bold text-primary-1 text-3xl md:text-[24px]">
                      {responseRoom?.room?.name}
                    </h3>
                    <div className="inline-flex flex-col gap-2 pt-3 lg:items-center lg:flex-row">
                      <Location className="w-5 h-5 mr-1" />
                      <p className="text-[15px]">
                        {`${responseRoom?.room?.district}, ${responseRoom?.room?.city}`}
                      </p>
                    </div>
                  </div>
                  <hr className="h-0.5 bg-gray-400 border-0" />
                  {/* Harga Kamar */}
                  <p className="mt-5 text-primary-1">Mulai dari</p>
                  <p className="mb-2 text-secondary-1">
                    {" "}
                    <span className="text-2xl font-semibold text-secondary-1">
                      {formatRupiah(responseRoom?.room?.price)}
                    </span>{" "}
                    / bulan
                  </p>
                  {/* Button Registrasi */}
                  <Link
                    href={
                      isAuthenticated
                        ? `/details/${responseRoom?.room?.id}/submission`
                        : "/login/pencari"
                    }
                    className="w-full px-4 py-3 text-center text-white rounded-lg bg-primary-1 hover:bg-secondary-1"
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
