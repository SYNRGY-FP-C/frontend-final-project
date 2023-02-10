/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import RoomCard from "@/components/cards/RoomCard";
import Checkbox from "@/components/forms/Checkbox";
import Input from "@/components/forms/Input";
import SearchBar from "@/components/forms/SearchBar";
import Star from "@/components/icons/Star";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Search({ data }) {
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: data || [],
  });
  const [search, setSearch] = useState({
    keyword: "",
    label: "",
    type: "",
    price_min: 0,
    price_max: 999999999,
    size: 5,
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    setResponse({
      ...response,
      isLoading: true,
      isError: false,
    });
    try {
      const temp = await roomService.search({
        params: search,
      });
      setResponse({
        isLoading: false,
        isError: false,
        data: temp.data,
      });
    } catch (error) {
      setResponse({
        ...response,
        isLoading: false,
        isError: true,
      });
    }
  };

  const handleLabel = (type) => {
    if (search.type === type) {
      setSearch({
        ...search,
        type: "",
      });
      return;
    }
    setSearch({
      ...search,
      type: type,
    });
  };

  const handleShowMore = async () => {
    setResponse({
      ...response,
      isLoading: true,
      isError: false,
    });
    try {
      const temp = await roomService.search({
        params: search,
      });
      setResponse({
        isLoading: false,
        isError: false,
        data: temp.data,
      });
    } catch (error) {
      setResponse({
        ...response,
        isLoading: false,
        isError: true,
      });
    }
  };

  useEffect(() => {
    handleShowMore();
  }, [search.size]);

  const handleClick = () => {
    setSearch({
      ...search,
      size: search.size + 5,
    });
  };

  return (
    <DefaultLayout title="Cari kost impianmu">
      <Section>
        <div className="flex flex-col pt-24 pb-4 gap-y-4">
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <h2 className="font-bold text-2xl lg:text-[40px] text-base-1">
              Hasil pencarian: {search.keyword}
            </h2>
            <p className="text-base-2">
              Ditemukan {response.data.length} kost-kostan
            </p>
          </div>
          <div className="grid h-full grid-cols-12">
            <div className="hidden col-span-4 lg:grid">
              <div className="relative">
                <div className="flex flex-col w-full border border-gray-200 shadow p-7 rounded-xl gap-y-6">
                  <h5 className="text-xl font-bold text-base-1">
                    Filter Pencarianmu
                  </h5>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Label</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Kost Hits</Checkbox>
                      <Checkbox>SuperKost</Checkbox>
                      <Checkbox>Kost Terbaru</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Tipe</h5>
                    <div className="flex flex-row gap-x-2">
                      <button
                        className={clsx(
                          "w-24 text-center py-0.5 border rounded-lg",
                          {
                            ["bg-primary-1 text-white"]:
                              search.type === "CAMPURAN",
                            ["border-gray-300 text-base-2"]:
                              search.type !== "CAMPURAN",
                          }
                        )}
                        onClick={() => handleLabel("CAMPURAN")}
                      >
                        Campur
                      </button>
                      <button
                        className={clsx(
                          "w-24 text-center py-0.5 border rounded-lg",
                          {
                            ["bg-primary-1 text-white"]:
                              search.type === "PUTRI",
                            ["border-gray-300 text-base-2"]:
                              search.type !== "PUTRI",
                          }
                        )}
                        onClick={() => handleLabel("PUTRI")}
                      >
                        Pria
                      </button>
                      <button
                        className={clsx(
                          "w-24 text-center py-0.5 border rounded-lg",
                          {
                            ["bg-primary-1 text-white"]:
                              search.type === "PUTRA",
                            ["border-gray-300 text-base-2"]:
                              search.type !== "PUTRA",
                          }
                        )}
                        onClick={() => handleLabel("PUTRA")}
                      >
                        Wanita
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Rentang Harga</h5>
                    <div className="flex flex-col gap-y-3">
                      <Input
                        type="number"
                        placeholder="Harga Minimum"
                        value={search.price_min}
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            price_min: Number(e.target.value),
                          })
                        }
                      />
                      <Input
                        type="number"
                        placeholder="Harga Maksimum"
                        value={search.price_max}
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            price_max: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Rating</h5>
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
                    <h5 className="font-bold text-base-1">Promo</h5>
                    <div className="flex flex-col gap-y-3">
                      <Checkbox>Diskon 25%</Checkbox>
                      <Checkbox>Diskon 50%</Checkbox>
                      <Checkbox>Super Deals</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Fasilitas</h5>
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
                    <h5 className="font-bold text-base-1">Skema Pembayaran</h5>
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
                    <button
                      className="w-full py-3 text-white rounded-lg bg-primary-1"
                      onClick={handleSearch}
                    >
                      Filter
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSearch({
                          keyword: "",
                          label: "",
                          type: "",
                          price_min: 0,
                          price_max: 999999999,
                          size: 5,
                        })
                      }
                      className="w-full py-3 border rounded-lg bg-base-9 text-primary-1 border-primary-1"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Bandingkan Kost</h5>
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
                <form onSubmit={handleSearch}>
                  <SearchBar
                    placeholder="Cari nama kost, alamat, daerah atau kota"
                    value={search.keyword}
                    onChange={(e) =>
                      setSearch({ ...search, keyword: e.target.value })
                    }
                  />
                </form>
                <div className="flex flex-col w-full h-full py-6 gap-y-6">
                  {response.data.length > 0 ? (
                    response.data.map((data) => {
                      return <RoomCard key={uuid()} data={data} />;
                    })
                  ) : (
                    <p className="text-lg font-semibold text-center">
                      Kamar tidak ditemukan
                    </p>
                  )}
                  <div className="flex justify-center">
                    {response.data.length > 0 && (
                      <div className="block">
                        <Button
                          className="block"
                          isLoading={response.isLoading}
                          onClick={handleClick}
                        >
                          Lihat lebih banyak
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}

export const getServerSideProps = async () => {
  const { data } = await roomService.search({
    params: {
      size: 5,
    },
  });
  return {
    props: {
      data,
    },
  };
};
