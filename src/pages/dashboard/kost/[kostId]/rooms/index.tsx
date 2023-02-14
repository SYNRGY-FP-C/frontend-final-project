/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/buttons/BackButton";
import RoomKostCard from "@/components/cards/RoomKostCard";
import LoadingScreen from "@/components/LoadingScreen";
import { ROLE_ADMIN } from "@/constants/roles";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Rooms() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [rooms, setRooms] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  const getRooms = async () => {
    const { data } = await roomService.getByKost(router?.query?.kostId);
    setRooms(data);
    setIsloading(false);
  };

  useEffect(() => {
    if (router?.query?.kostId) {
      setIsloading(true);
      getRooms();
      setLoading(false);
    }
  }, [router.isReady]);

  if (loading) return <LoadingScreen />;

  const onDelete = async (id) => {
    await roomService.remove(id);
    await getRooms();
  };

  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DefaultLayout title="Kamar kost anda">
        <Section>
          <div className="flex flex-col py-16 lg:py-24">
            <div className="grid grid-cols-12">
              <div className="grid w-full col-span-12 lg:col-span-4 place-items-start">
                <div className="flex flex-col">
                  <BackButton />
                  <h2 className="text-[40px] font-bold text-primary-1">
                    Kost Binar
                  </h2>
                  <Link
                    href={`/dashboard/kost/${router?.query?.kostId}/rooms/add`}
                  >
                    <div className="flex items-center gap-1 py-6 text-center text-white rounded-lg bg-primary-1 mr-9 mb-9 px-9 hover:bg-secondary-1">
                      <img
                        src="/images/add_box.svg"
                        width={24}
                        height={24}
                        alt="default img"
                      />
                      <h1>Tambah Kamar Baru</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="grid col-span-12 gap-3 lg:col-span-8">
                {isLoading ? (
                  <h1 className="w-full text-center">Memuat data...</h1>
                ) : rooms.length > 0 ? (
                  rooms.map((room) => (
                    <RoomKostCard
                      key={room.id}
                      data={room}
                      href={`/dashboard/kost/${router?.query?.kostId}/rooms/${room.id}`}
                      onDelete={() => onDelete(room.id)}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex justify-center object-cover w-full h-full max-w-xs overflow-hidden">
                      <img
                        className="object-cover w-full rounded-xl"
                        src="/images/register-pemilik.png"
                        alt="Kamar kost"
                      />
                    </div>
                    <p className="max-w-xs text-center">
                      Kost Anda belum memiliki kamar, yuk tambah kamar
                      pertamamu!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </ProtectedPage>
  );
}
