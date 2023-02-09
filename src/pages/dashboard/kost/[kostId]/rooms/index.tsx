/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/buttons/BackButton";
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import LoadingScreen from "@/components/LoadingScreen";
import { ROLE_ADMIN } from "@/constants/roles";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function Rooms() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [rooms, setRooms] = React.useState([]);

  const getRooms = async () => {
    const { data } = await roomService.getByKost(router?.query?.kostId);
    setRooms(data);
  };

  useEffect(() => {
    if (router?.query?.kostId) {
      setLoading(false);
      getRooms();
    }
  }, [router.isReady]);

  if (loading) return <LoadingScreen />;

  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DefaultLayout title="Kamar kost anda">
        <Section>
          <div className="flex flex-col py-16 lg:py-24">
            <div className="grid grid-cols-12">
              <div className="grid w-full lg:col-span-4 place-items-start">
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
              <div className="grid lg:col-span-8">
                {rooms.length > 0 ? (
                  rooms.map((room) => (
                    <div
                      key={uuid()}
                      className="grid grid-cols-1 border border-gray-200 hover:shadow lg:grid-cols-12 rounded-2xl"
                    >
                      <div className="grid col-span-4">
                        <div className="flex justify-center object-cover w-full h-56 overflow-hidden">
                          <img
                            className="object-cover w-full rounded-t-xl lg:rounded-l-2xl lg:rounded-r-none"
                            src={
                              room.image ||
                              "https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Screen-Shot-2021-09-02-at-14.56.22.jpg"
                            }
                            alt={room.name}
                          />
                        </div>
                      </div>
                      <div className="grid col-span-8 p-6">
                        <div className="relative flex flex-col h-full gap-y-3">
                          <div className="flex flex-col justify-between md:flex-row">
                            <Link
                              href={`/details/kost/${router?.query?.kostId}/rooms/${room.id}`}
                            >
                              <h5 className="max-w-xs overflow-hidden text-[20px] font-bold text-base-1 text-ellipsis whitespace-nowrap">
                                {room.name}
                              </h5>
                            </Link>
                            <div className="flex flex-row items-center gap-3">
                              <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-center text-white rounded-2xl bg-secondary-1">
                                {room.label}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row items-center gap-x-2">
                            <Location className="w-5 h-5" />
                            <p className="max-w-lg overflow-hidden text-base-2 text-ellipsis whitespace-nowrap">
                              {room.address}
                            </p>
                          </div>
                          <div className="flex flex-row items-center gap-x-3">
                            <div className="inline-flex items-center gap-x-1">
                              <Star className="w-5 h-5" />{" "}
                              <span className="font-bold">{room.rate}</span>
                            </div>
                            <span className="w-24 py-1.5 text-xs text-center border border-base-1 text-base-1 rounded-2xl">
                              {room.type}
                            </span>
                          </div>
                          <div className="flex items-stretch justify-end h-full">
                            <p className="self-end text-xl font-bold text-secondary-1">
                              {formatRupiah(room.price)} / bulan
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex justify-center object-cover w-full h-full max-w-xs overflow-hidden">
                      <img
                        className="object-cover w-full rounded-xl"
                        src="/images/register-pemilik.png"
                        alt="Test"
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
